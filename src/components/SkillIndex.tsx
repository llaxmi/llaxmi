import { skillGroups } from "../constants/data";
import MonoLabel from "./primitives/MonoLabel";

const SkillIndex = () => (
  <dl className="border-t border-rule">
    {skillGroups.map((group) => (
      <div
        key={group.label}
        className="grid grid-cols-4 gap-x-4 gap-y-2 border-b border-rule py-6 md:grid-cols-12 md:py-8"
      >
        <dt className="col-span-4 md:col-span-3">
          <MonoLabel>{group.label}</MonoLabel>
        </dt>
        <dd className="col-span-4 md:col-span-9">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="font-display text-step-1 text-body"
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
