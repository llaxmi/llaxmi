/**
 * A hand-drawn frame around its children, in the manner of a stretched canvas
 * held by four clips.
 *
 * Each edge is its own SVG so it can stretch along its length while
 * `vector-effect="non-scaling-stroke"` keeps the ink at a constant weight — one
 * stretched rectangle would thin the verticals and fatten the horizontals as
 * the card resizes.
 */

/* Inherits the surface's body color, so the frame inverts with `data-surface`
   and follows the card's hover state without any extra wiring. */
const INK = "currentColor";
const STROKE = 7;
const BAR = 16; // px thickness of the strip an edge is drawn inside
const CLIP_LENGTH = 34;

interface EdgeProps {
  viewBox: string;
  d: string;
  style: React.CSSProperties;
}

const Edge = ({ viewBox, d, style }: EdgeProps) => (
  <svg
    viewBox={viewBox}
    preserveAspectRatio="none"
    className="pointer-events-none absolute"
    style={style}
    aria-hidden
    focusable="false"
  >
    <path
      d={d}
      fill="none"
      stroke={INK}
      strokeWidth={STROKE}
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

/** A short tick crossing a bar, like the clip holding a print to a board. */
const Clip = ({ style }: { style: React.CSSProperties }) => (
  <svg
    viewBox="0 0 16 34"
    className="pointer-events-none absolute"
    style={style}
    aria-hidden
    focusable="false"
  >
    <path
      d="M9 3 C 7.4 12, 8.8 22, 7.4 31"
      fill="none"
      stroke={INK}
      strokeWidth={STROKE}
      strokeLinecap="round"
    />
  </svg>
);

const horizontal = { left: 0, width: "100%", height: BAR } as const;
const vertical = { top: 0, height: "100%", width: BAR } as const;
const clip = {
  top: -CLIP_LENGTH / 2,
  width: BAR,
  height: CLIP_LENGTH,
} as const;

interface SketchFrameProps {
  children: React.ReactNode;
  className?: string;
}

const SketchFrame = ({ children, className = "" }: SketchFrameProps) => (
  <div className={`relative ${className}`}>
    <Edge
      viewBox="0 0 600 16"
      d="M3 8.6 C 120 6.4, 240 10.2, 360 7.4 S 520 9.6, 597 8"
      style={{ ...horizontal, top: -BAR / 2 }}
    />
    <Edge
      viewBox="0 0 600 16"
      d="M3 7.6 C 140 10.4, 250 5.8, 380 9 S 530 6.6, 597 8.4"
      style={{ ...horizontal, bottom: -BAR / 2 }}
    />
    <Edge
      viewBox="0 0 16 600"
      d="M8 3 C 5.9 130, 10.4 260, 7.2 390 S 9.8 525, 8 597"
      style={{ ...vertical, left: -BAR / 2 }}
    />
    <Edge
      viewBox="0 0 16 600"
      d="M8.4 3 C 10.6 110, 6.2 250, 9.4 370 S 6.8 520, 8 597"
      style={{ ...vertical, right: -BAR / 2 }}
    />

    <Clip style={{ ...clip, left: 18 }} />
    <Clip style={{ ...clip, right: 18 }} />
    <Clip style={{ ...clip, top: "auto", bottom: -CLIP_LENGTH / 2, left: 18 }} />
    <Clip
      style={{ ...clip, top: "auto", bottom: -CLIP_LENGTH / 2, right: 18 }}
    />

    {children}
  </div>
);

export default SketchFrame;
