import { useEffect, useRef, useState } from "react";

type RGB = [number, number, number];

const SWATCHES = 5;
// Images are shrunk to this many px on the long side before sampling.
const SAMPLE = 80;

const toHex = ([r, g, b]: RGB) =>
  `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;

const luminance = ([r, g, b]: RGB) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// Median cut: keep splitting the bucket with the widest channel range at its
// median until there are enough buckets, then average each one.
const medianCut = (pixels: RGB[], count: number): RGB[] => {
  const range = (bucket: RGB[], c: number) => {
    let min = 255;
    let max = 0;
    for (const p of bucket) {
      if (p[c] < min) min = p[c];
      if (p[c] > max) max = p[c];
    }
    return max - min;
  };

  let buckets = [pixels];
  while (buckets.length < count) {
    let widest = { index: -1, channel: 0, size: -1 };
    buckets.forEach((bucket, index) => {
      if (bucket.length < 2) return;
      for (let channel = 0; channel < 3; channel++) {
        const size = range(bucket, channel);
        if (size > widest.size) widest = { index, channel, size };
      }
    });
    if (widest.index === -1) break;

    const bucket = [...buckets[widest.index]].sort((a, b) => a[widest.channel] - b[widest.channel]);
    const mid = Math.floor(bucket.length / 2);
    buckets = [
      ...buckets.slice(0, widest.index),
      bucket.slice(0, mid),
      bucket.slice(mid),
      ...buckets.slice(widest.index + 1),
    ];
  }

  return buckets
    .map((bucket) => {
      const sum = bucket.reduce<RGB>((acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]], [0, 0, 0]);
      return sum.map((v) => Math.round(v / bucket.length)) as RGB;
    })
    .sort((a, b) => luminance(b) - luminance(a));
};

const extractPalette = (img: HTMLImageElement): RGB[] => {
  const scale = SAMPLE / Math.max(img.naturalWidth, img.naturalHeight);
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  ctx.drawImage(img, 0, 0, w, h);

  const { data } = ctx.getImageData(0, 0, w, h);
  const pixels: RGB[] = [];
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 127) pixels.push([data[i], data[i + 1], data[i + 2]]);
  }
  return pixels.length ? medianCut(pixels, SWATCHES) : [];
};

interface PaletteDemoProps {
  // The image shown before a visitor adds their own.
  initialImage: string;
}

/** A working copy of the palette generator: drop in a photo, get five colours. */
const PaletteDemo = ({ initialImage }: PaletteDemoProps) => {
  const [src, setSrc] = useState(initialImage);
  const [palette, setPalette] = useState<RGB[]>([]);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Revoke the previous object URL whenever the visitor swaps photos.
  useEffect(() => {
    if (src === initialImage) return;
    return () => URL.revokeObjectURL(src);
  }, [src, initialImage]);

  const loadFile = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setStatus("That file isn't an image. Try a JPG or PNG.");
      return;
    }
    setStatus("");
    setSrc(URL.createObjectURL(file));
  };

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setStatus(`Copied ${hex}`);
    } catch {
      setStatus(`Couldn't copy. The colour is ${hex}`);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          loadFile(e.dataTransfer.files[0]);
        }}
        className={`relative overflow-hidden border ${
          dragging ? "border-2 border-dashed border-flag-blue" : "border-rule"
        }`}
      >
        <img
          src={src}
          alt="Image the palette is taken from"
          onLoad={(e) => setPalette(extractPalette(e.currentTarget))}
          className="aspect-square w-full object-cover object-top"
        />
        {dragging && (
          <p className="absolute inset-0 grid place-items-center bg-white/80 font-hand text-step-2 text-body">
            Drop it here
          </p>
        )}
      </div>

      <ul className="grid grid-cols-5 border border-rule" aria-label="Extracted palette">
        {palette.map((rgb) => {
          const hex = toHex(rgb);
          const dark = luminance(rgb) < 140;
          return (
            <li key={hex}>
              <button
                type="button"
                onClick={() => copy(hex)}
                aria-label={`Copy ${hex}`}
                className={`flex h-16 w-full items-end p-1.5 text-[0.65rem] font-semibold transition-[height] duration-200 hover:h-20 focus-visible:h-20 ${
                  dark ? "text-white" : "text-[rgb(28_33_64)]"
                }`}
                style={{ backgroundColor: hex }}
              >
                {hex}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="min-h-[44px] text-step--1 font-semibold text-body underline decoration-flag-yellow decoration-2 underline-offset-4"
        >
          Try your own photo
        </button>
        <p role="status" className="font-hand text-step-1 leading-none text-accent-text">
          {status || "Click a colour to copy it"}
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        tabIndex={-1}
        onChange={(e) => {
          loadFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
    </div>
  );
};

export default PaletteDemo;
