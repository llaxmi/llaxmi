import { useRef, useState } from "react";
import type { Achievement } from "../constants/data";
import { achievements } from "../constants/data";
import Lightbox from "./Lightbox";
import MonoLabel from "./primitives/MonoLabel";

const CertificateGrid = () => {
  const [active, setActive] = useState<Achievement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setActive(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      <ul className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <li key={item.title} className="bg-surface">
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(item);
              }}
              className="group block h-full w-full p-5 text-left"
            >
              <div className="overflow-hidden bg-surface-2">
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  loading="lazy"
                  width={1200}
                  height={850}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <h3 className="mt-4 font-display text-step-1 font-bold uppercase leading-tight text-body">
                {item.title}
              </h3>
              <MonoLabel as="p" className="mt-2 block">
                {item.issuer} — {item.date}
              </MonoLabel>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox item={active} onClose={handleClose} />
    </>
  );
};

export default CertificateGrid;
