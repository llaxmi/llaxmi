import SkillCase from "../components/SkillCase";
import { skills } from "../constants/data";
const Skills = () => {
  return (
    <div className=" min-h-max px-4  mt-10  w-full rounded-lg">
      <div className="py-4">
        <h1 className="text-base font-lexend font-medium text-pri ">
          SKILLS AND TOOLS
        </h1>
      </div>
      <SkillCase items={skills} />
    </div>
  );
};

export default Skills;
