import SectionHeader from "../components/primitives/SectionHeader";

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto grid max-w-shell grid-cols-4 gap-x-4 gap-y-8 px-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <SectionHeader id="about-heading" section="about" title="About" />
      </div>

      <div className="col-span-4 md:col-span-7">
        <p className="measure text-step-2 leading-snug text-body">
          I finished my Bachelor&apos;s in Software Engineering at GCES in 2026. In my
          final-year project I found the part I enjoyed most wasn&apos;t building the
          pipeline. It was designing the experiment around it, and seeing how
          little a single leaderboard number can tell you.
        </p>

        <p className="measure mt-6 text-step-0 text-muted">
          I&apos;m drawn to retrieval-augmented generation, evaluation methods for
          LLM systems, and NLP over dense documents like legal text. I&apos;d like to
          spend the next few years studying these questions properly, as a PhD
          student or research assistant.
        </p>

        <p className="measure mt-6 text-step-0 text-muted">
          Before that I spent two years shipping production software, most
          recently LLM-backed data enrichment at SyncGTM. It taught me to write
          code other people can run, which matters for reproducible research too.
          All of my work is public on GitHub.
        </p>
      </div>

      <aside className="col-span-4 md:col-span-4 md:col-start-9">
        <blockquote className="-rotate-2 font-hand text-step-3 leading-tight text-flag-blue">
          I care about the parts people don&apos;t notice.
        </blockquote>

        <dl className="mt-12 border-t border-rule">
          {[
            { label: "Focus", value: "RAG & LLM evaluation" },
            { label: "Degree", value: "B.E. Software Engineering, GCES, 2022–2026" },
            { label: "CGPA", value: "3.63 / 4.00" },
            { label: "Experience", value: "2 years in industry, SyncGTM & Codse" },
            { label: "Code", value: "Public at github.com/llaxmi" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
            >
              <dt className="text-step--1 text-muted">
                {label}
              </dt>
              <dd className="text-right text-step--1 font-semibold text-body">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  </section>
);

export default About;
