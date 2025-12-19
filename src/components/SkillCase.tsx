import { Skill } from "../constants/data";

interface SkillCaseProps {
  items: Skill[];
}

const SkillCase = ({ items }: SkillCaseProps) => {
  return (
    <div className=" w-full">
      <div className="mx-auto grid max-w-5xl grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 items-center gap-6 md:gap-8 lg:gap-10">
        {items.map((item) => (
          <div
            key={item.alt}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-3 rounded-xl bg-white shadow-md transition-all duration-300 border border-gray-200">
              <img
                className="max-h-12 md:max-h-14 w-full object-contain"
                src={item.src}
                alt={item.alt}
              />
            </div>
            <p className="mt-2 text-xs font-marcellus text-white text-center">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCase;
