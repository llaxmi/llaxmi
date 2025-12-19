import { socialLinks } from "../constants/url";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-2 items-start text-xs sm:text-[15px] font-mono bg-[#19202c] p-3 sm:p-4 rounded-md w-full max-w-full break-all">
      <span className="text-[#94a3b8]">// Let's connect </span>
      {socialLinks.map((social) => (
        <div
          key={social.label}
          className="flex flex-wrap font-mono items-center gap-1.5 sm:gap-2 w-full"
        >
          <span className="text-[#6ee7b7]">const</span>
          <span className="mx-0.5 sm:mx-1 text-[#38bdf8]">
            {social.label.toLowerCase()}
          </span>
          <span className="text-[#cbd5e1]"> = </span>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`no-underline group max-w-full min-w-0`}
          >
            <span className="text-[#facc15]">
              "
              <span
                className={`break-all underline underline-offset-2 group-hover:text-yellow-400 duration-200`}
                style={{ wordBreak: "break-all" }}
              >
                {social.url}
              </span>
              "
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
