import { socialLinks } from "../constants/url";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => (
  <ul className={`flex flex-wrap gap-x-8 gap-y-3 ${className}`}>
    {socialLinks.map((social) => (
      <li key={social.label}>
        <a
          href={social.url}
          target={social.url.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] items-center text-step-0 font-semibold text-muted transition-colors hover:text-body"
        >
          <span className="border-b border-transparent pb-1 transition-colors group-hover:border-flag-yellow">
            {social.label}
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
