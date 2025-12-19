import { LuDownload } from "react-icons/lu";
import CV from "../assets/Laxmi_CV.pdf";

interface ResumeButtonProps {
  title: string;
}

const ResumeButton = ({ title }: ResumeButtonProps) => {
  return (
    <a
      className="inline-flex font-marcellus font-semibold items-center gap-2 rounded-full bg-pri px-4 md:px-6 py-2 text-sm bg-blue-950 md:text-base w-max justify-center text-white shadow-lg"
      href={CV}
      download="Laxmi_CV"
    >
      <LuDownload size={18} />
      {title}
    </a>
  );
};

export default ResumeButton;
