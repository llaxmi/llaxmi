import { ReactNode } from "react";

interface MonoLabelProps {
  children: ReactNode;
  as?: "span" | "p" | "div" | "h2";
  className?: string;
  id?: string;
}

const MonoLabel = ({ children, as: Tag = "span", className = "", id }: MonoLabelProps) => (
  <Tag
    id={id}
    className={`font-mono text-step--1 uppercase tracking-[0.18em] text-muted ${className}`}
  >
    {children}
  </Tag>
);

export default MonoLabel;
