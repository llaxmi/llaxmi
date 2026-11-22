import type { FlagColor } from "../../constants/data";
import { FRAYED, flagStyles } from "./flagStyles";

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
