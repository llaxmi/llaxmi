import SkillCase from "../components/SkillCase";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <div className=" bg-gradient-to-r from-gradient1  to-gray-50 min-h-max px-2 py-10 mt-20 md:mt-10 rounded-xl w-full">
      <div className="my-4">
        <h1 className="text-center text-lg font-lexend font-medium text-pri -mt-10">
          SKILLS AND TOOLS
        </h1>
      </div>
      <SkillCase items={skills} />
    </div>
  );
};

export default Skills;
