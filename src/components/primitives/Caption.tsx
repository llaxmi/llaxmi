import { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
  as?: "span" | "p" | "div" | "h2";
  className?: string;
  id?: string;
}

const Caption = ({ children, as: Tag = "span", className = "", id }: CaptionProps) => (
  <Tag id={id} className={`text-step--1 text-muted ${className}`}>
    {children}
  </Tag>
);

export default Caption;
