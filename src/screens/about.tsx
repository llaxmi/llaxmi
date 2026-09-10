import SectionHeader from "../components/primitives/SectionHeader";

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto grid max-w-shell grid-cols-4 gap-x-4 gap-y-8 px-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <SectionHeader id="about-heading" index="02" title="About" />
      </div>

      <div className="col-span-4 md:col-span-7">
        <p className="measure text-step-1 text-body">
          I&apos;m a full stack developer based in Pokhara, Nepal. Most of what I
          enjoy is the boring-sounding stuff done right: a data layer that
          doesn&apos;t fall over, a form that doesn&apos;t fight the user.
        </p>

        <p className="measure mt-6 text-step-0 text-muted">
          Outside client work I build small things for fun — an app for
          animated love letters, a gesture-controlled 3D canvas, whatever idea
          won&apos;t leave me alone that week.
        </p>

        <p className="measure mt-6 text-step-0 text-muted">
          Right now I&apos;m working out where language models actually belong in an
          interface, and where they don&apos;t.
        </p>
      </div>

      <aside className="col-span-4 md:col-span-4 md:col-start-9">
        <blockquote className="border-l-2 border-accent pl-6 font-display text-step-2 leading-snug text-body">
          I care about the parts people don&apos;t notice.
        </blockquote>

        <dl className="mt-10 border-t border-rule">
          {[
            { label: "Role", value: "Full-stack Engineer" },
            { label: "Current", value: "SyncGTM · Next.js / NestJS / TS" },
            { label: "Education", value: "B.E. Software Eng., GCES · 2026" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
            >
              <dt className="font-mono text-step--1 uppercase tracking-[0.18em] text-muted">
                {label}
              </dt>
              <dd className="text-right font-mono text-step--1 text-body">
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
