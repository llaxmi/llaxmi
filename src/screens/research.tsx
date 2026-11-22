import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../components/primitives/SectionHeader";
import SketchFrame from "../components/SketchFrame";
import { research, researchInterests } from "../constants/data";

const Research = () => (
  <section id="research" aria-labelledby="research-heading" className="border-b border-rule py-20 md:py-28">
    <div className="mx-auto max-w-shell px-gutter">
      <SectionHeader
        id="research-heading"
        section="research"
        title="Research"
        description="What I've studied so far, and what I'd like to study next."
      />

      <h3 className="text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">Interests</h3>
      <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-rule pt-6 md:grid-cols-3">
        {researchInterests.map(({ title, detail }) => (
          <li key={title}>
            <p className="font-display text-step-2 font-extrabold leading-[0.95] tracking-[-0.01em] text-body [font-stretch:92%]">
              {title}
            </p>
            <p className="mt-3 text-step--1 leading-relaxed text-muted">{detail}</p>
          </li>
        ))}
      </ul>

      <article aria-labelledby="research-project" className="mt-20">
        <SketchFrame className="text-body">
          <div data-surface="paper" className="bg-white p-5 sm:p-8 lg:p-10">
            <p className="font-hand text-step-0 leading-snug text-accent-text">{research.context}</p>

            <h3
              id="research-project"
              className="mt-4 max-w-[22ch] font-display text-step-4 font-extrabold leading-[0.95] tracking-[-0.015em] text-body [font-stretch:92%]"
            >
              {research.title}
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h4 className="text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">Question</h4>
                <p className="measure mt-2 text-step-1 font-medium leading-snug text-body">{research.question}</p>

                <h4 className="mt-8 text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">Method</h4>
                <p className="measure mt-2 text-step-0 leading-relaxed text-muted">{research.method}</p>
              </div>

              <aside className="lg:col-span-5">
                <h4 className="text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">Methods & tools</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {research.methods.map((m) => (
                    <li key={m} className="rounded-full border border-rule px-3 py-1 text-step--1 text-body">
                      {m}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <h4 className="mt-12 text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">Findings</h4>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {research.findings.map(({ figure, label, detail }) => (
                <div key={label}>
                  <dt>
                    <span className="block whitespace-nowrap font-display text-step-3 font-extrabold leading-none tracking-[-0.015em] text-body [font-stretch:90%]">
                      {figure}
                    </span>
                    <span className="mt-2 block text-step--1 font-semibold text-body">{label}</span>
                  </dt>
                  <dd className="mt-2 text-step--1 leading-relaxed text-muted">{detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 grid grid-cols-1 items-end gap-8 border-t border-rule pt-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h4 className="text-step--1 font-semibold uppercase tracking-[0.12em] text-muted">The honest part</h4>
                <p className="measure mt-2 text-step-0 leading-relaxed text-body">{research.caveat}</p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <a
                  href={research.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-body px-6 py-3 text-step-0 font-semibold text-surface transition-colors hover:bg-flag-blue"
                >
                  Code, data & full write-up
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </SketchFrame>
      </article>
    </div>
  </section>
);

export default Research;
