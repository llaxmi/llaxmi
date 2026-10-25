import type { FlagColor } from "../../constants/data";

// Fill and text pairs that keep each flag's label above 4.5:1 contrast.
export const flagStyles: Record<FlagColor, string> = {
  blue: "bg-flag-blue text-white",
  white: "bg-flag-white text-[rgb(28_33_64)] ring-1 ring-inset ring-[rgb(185_190_204)]",
  red: "bg-flag-red text-white",
  green: "bg-flag-green text-white",
  yellow: "bg-flag-yellow text-[rgb(28_33_64)]",
};

// A frayed bottom edge, like cloth that has been out in the wind.
export const FRAYED =
  "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 80% 90%, 66% 100%, 52% 91%, 38% 100%, 24% 90%, 10% 100%, 0 90%)";

interface FlagProps {
  color: FlagColor;
  className?: string;
}

/** A small decorative flag that ties a section heading to its nav flag. */
const Flag = ({ color, className = "" }: FlagProps) => (
  <span
    aria-hidden
    className={`inline-block h-9 w-7 shrink-0 ${flagStyles[color]} ${className}`}
    style={{ clipPath: FRAYED }}
  />
);

export default Flag;
