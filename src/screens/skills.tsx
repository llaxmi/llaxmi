import PageTitle from "../components/PageTitle";
import SkillCase from "../components/SkillCase";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <div className="w-full py-4">
      <PageTitle
        title="Skills & Tools"
        description="Technologies I work with"
      />

      <div className="min-h-max px-4 w-full rounded-lg">
        <SkillCase items={skills} />
      </div>
    </div>
  );
};

export default Skills;
