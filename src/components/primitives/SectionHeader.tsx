import { flagFor } from "../../constants/data";
import Flag from "./Flag";

interface SectionHeaderProps {
  id: string;
  // The section's nav target, which picks the flag shown beside the title.
  section: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ id, section, title, description }: SectionHeaderProps) => (
  <header className="mb-12 md:mb-16">
    <div className="flex items-start gap-4 md:gap-5">
      <Flag color={flagFor(section)} className="mt-[0.15em] h-10 w-8 -rotate-3 md:h-14 md:w-10" />
      <h2
        id={id}
        className="font-display text-step-4 font-extrabold leading-[0.9] tracking-[-0.035em] text-body [font-stretch:78%] md:text-step-5"
      >
        {title}
      </h2>
    </div>

    {description && (
      <p className="measure mt-5 font-hand text-step-2 leading-tight text-muted md:ml-[3.75rem]">
        {description}
      </p>
    )}
  </header>
);

export default SectionHeader;
