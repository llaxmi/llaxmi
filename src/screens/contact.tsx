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
      <SectionHeader id="contact-heading" index="07" title="Contact" />

      <RevealText
        as="p"
        lines={["Let's build", "something."]}
        className="font-display text-display font-extrabold uppercase leading-[0.85] tracking-[-0.03em] text-body"
      />

      <p className="measure mt-10 text-step-1 text-muted">
        Open to full-stack roles.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="group mt-8 inline-block font-display text-step-2 text-body"
      >
        {EMAIL}
        <span className="mt-2 block h-[3px] w-full origin-left scale-x-75 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </a>

      <SocialLinks className="mt-14" />
    </div>
  </section>
);

export default Contact;
