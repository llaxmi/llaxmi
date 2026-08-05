export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export const EMAIL = "llaxmii.dev@gmail.com";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/llaxmi", handle: "@llaxmi" },
  { label: "LinkedIn", url: "https://linkedin.com/in/llaxmi/", handle: "in/llaxmi" },
  { label: "Twitter", url: "https://x.com/ll4xmii", handle: "@ll4xmii" },
  { label: "Email", url: `mailto:${EMAIL}`, handle: EMAIL },
];
