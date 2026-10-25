import { Download } from "lucide-react";
import CV from "../assets/LaxmiLamichhane.pdf";

interface ResumeButtonProps {
  label?: string;
  className?: string;
}

const ResumeButton = ({ label = "Download CV", className = "" }: ResumeButtonProps) => (
  <a
    href={CV}
    download="LaxmiLamichhane_CV"
    className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-body px-4 text-step--1 font-semibold text-body transition-colors duration-200 hover:bg-body hover:text-surface ${className}`}
  >
    <Download size={14} aria-hidden />
    {label}
  </a>
);

export default ResumeButton;
