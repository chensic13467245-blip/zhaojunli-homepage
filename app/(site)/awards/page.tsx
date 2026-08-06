import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { awards } from "@/content/awards";

export const metadata: Metadata = { title: "荣誉奖励", description: "赵俊莉教授的科研、教学与学生指导奖励。" };

export default function AwardsPage() {
  return (
    <>
      <PageHero eyebrow="Awards" title="荣誉奖励" description="来自科研创新、学术论文、教学实践与学生指导的代表性荣誉。" />
      <Section eyebrow="Recognition" title="代表性荣誉">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {awards.map((award, index) => (
            <article key={award.title} className="grid gap-4 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-start sm:gap-7 sm:py-9">
              <span className="font-mono text-2xl font-light text-sky-300">{String(index + 1).padStart(2, "0")}</span>
              <div><h2 className="text-lg font-semibold leading-8 text-slate-950 sm:text-xl">{award.title}</h2>{award.detail ? <p className="mt-2 text-sm leading-7 text-slate-600">{award.detail}</p> : null}</div>
              <div className="flex items-center gap-3 sm:justify-end"><span className="bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0b5f91]">{award.category}</span>{award.year ? <span className="font-mono text-sm text-slate-400">{award.year}</span> : null}</div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

