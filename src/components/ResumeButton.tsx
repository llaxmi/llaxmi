import { Download } from "lucide-react";
import CV from "../assets/LaxmiLamichhane.pdf";

interface ResumeButtonProps {
  label?: string;
  className?: string;
}

const ResumeButton = ({ label = "CV", className = "" }: ResumeButtonProps) => (
  <a
    href={CV}
    download="LaxmiLamichhane_CV"
    className={`inline-flex min-h-[44px] items-center gap-2 border border-body px-4 font-mono text-step--1 uppercase tracking-[0.18em] text-body transition-colors duration-200 hover:bg-body hover:text-surface ${className}`}
  >
    <Download size={14} aria-hidden />
    {label}
  </a>
);

export default ResumeButton;
