import { LuDownload } from "react-icons/lu";
import CV from "../assets/Laxmi_CV.pdf";

const ResumeButton = ({ title }: { title: string }) => {
  return (
    <a
      className="inline-flex font-marcellus items-center rounded-md bg-blue-900 my-2 hover:bg-gray-800 px-4 py-[3px] font-SourcePro text-sm font-normal text-white shadow-sm  "
      href={CV}
      download="CV"
    >
      <LuDownload size={16} className="mx-1" />
      {title}
    </a>
  );
};

export default ResumeButton;
