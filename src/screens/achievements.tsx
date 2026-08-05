import CertificateGrid from "../components/CertificateGrid";
import SectionHeader from "../components/primitives/SectionHeader";

export const Achievements = () => (
  <section id="achievements" aria-labelledby="achievements-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="achievements-heading"
        index="06"
        title="Achievements"
        description="Competitions, mentoring, and certificates."
      />
      <CertificateGrid />
    </div>
  </section>
);
