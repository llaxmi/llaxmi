import SectionHeader from "../components/primitives/SectionHeader";
import RevealText from "../components/primitives/RevealText";
import SocialLinks from "../components/SocialLinks";
import { EMAIL } from "../constants/url";

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    data-surface="ink"
    className="bg-surface py-20 text-body md:py-28"
  >
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader id="contact-heading" section="contact" title="Contact" />

      <RevealText
        as="p"
        lines={["Let's build", "something."]}
        className="font-display text-display font-extrabold leading-[0.82] tracking-[-0.02em] text-body [font-stretch:75%]"
      />

      <p className="measure mt-10 -rotate-1 font-hand text-step-3 leading-tight text-accent-text">
        Open to full-stack roles.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="group mt-8 inline-block break-all font-display text-step-2 font-bold text-body"
      >
        {EMAIL}
        <span className="mt-2 block h-[3px] w-full origin-left scale-x-75 bg-flag-yellow transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </a>

      <SocialLinks className="mt-14" />
    </div>
  </section>
);

export default Contact;
