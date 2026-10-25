import { skillGroups } from "../constants/data";

// Confident tools are set in bold display type; still-learning tools are
// handwritten, like notes in pencil that haven't been inked yet.
const SkillIndex = () => (
  <dl className="border-t border-rule">
    {skillGroups.map((group) => (
      <div
        key={group.label}
        className="grid grid-cols-4 items-baseline gap-x-4 gap-y-3 border-b border-rule py-6 md:grid-cols-12 md:py-8"
      >
        <dt className="col-span-4 font-hand text-step-2 leading-none text-accent-text md:col-span-3">
          {group.label}
        </dt>

        <dd className="col-span-4 md:col-span-6">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className={
                  group.learning
                    ? "-rotate-1 font-hand text-step-3 leading-none text-body"
                    : "font-display text-step-2 font-bold leading-tight tracking-[-0.02em] text-body [font-stretch:85%]"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </dd>

        <dd className="col-span-4 text-step--1 text-muted md:col-span-3 md:text-right">
          Used in{" "}
          {group.usedIn.map((name, i) => (
            <span key={name}>
              {i > 0 && ", "}
              <span className="font-semibold text-body">{name}</span>
            </span>
          ))}
        </dd>
      </div>
    ))}
  </dl>
);

export default SkillIndex;
