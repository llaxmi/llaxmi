import PageTitle from "../components/PageTitle";
import SkillCase from "../components/SkillCase";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <>
      <PageTitle title="SKILLS AND TOOLS" />
      <div className="min-h-max px-4 mt-10 w-full rounded-lg">
        <SkillCase items={skills} />
      </div>
    </>
  );
};

export default Skills;
