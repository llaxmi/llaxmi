import SectionHeader from "../components/primitives/SectionHeader";
import RevealText from "../components/primitives/RevealText";
import SocialLinks from "../components/SocialLinks";
import { EMAIL } from "../constants/url";

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    data-surface="ink"
    className="bg-surface py-10 text-body md:py-18"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader id="contact-heading" section="contact" title="Contact" />

      <RevealText
        as="p"
        lines={["Let's talk."]}
        className="font-display text-display font-extrabold leading-[0.82] tracking-[-0.02em] text-body [font-stretch:75%]"
      />

      <a
        href={`mailto:${EMAIL}`}
        className="group mt-4 inline-block break-all font-display text-step-2 font-bold text-body"
      >
        {EMAIL}
        <span className="mt-1 block h-[3px] w-full origin-left scale-x-75 bg-flag-yellow transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </a>

      <SocialLinks className="mt-14" />
    </div>
  </section>
);

export default Contact;
