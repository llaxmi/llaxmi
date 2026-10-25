import { skillGroups } from "../constants/data";

// Still-learning tools get a dashed underline so they read as in progress.
const LEARNING = "Exploring";

const SkillIndex = () => (
  <dl className="border-t border-rule">
    {skillGroups.map((group) => (
      <div
        key={group.label}
        className="grid grid-cols-4 items-baseline gap-x-4 gap-y-2 border-b border-rule py-6 md:grid-cols-12 md:py-8"
      >
        <dt className="col-span-4 font-hand text-step-2 leading-none text-accent-text md:col-span-3">
          {group.label}
        </dt>
        <dd className="col-span-4 md:col-span-9">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className={`font-display text-step-2 font-bold leading-tight tracking-[-0.02em] text-body [font-stretch:85%] ${
                  group.label === LEARNING
                    ? "underline decoration-muted decoration-dashed decoration-2 underline-offset-[0.25em]"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    ))}
  </dl>
);

export default SkillIndex;
