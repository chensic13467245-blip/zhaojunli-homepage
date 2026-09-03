import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { publications, publicationSummary } from "@/content/publications";

export const metadata: Metadata = { title: "学术论文", description: "赵俊莉教授的 CCF C 类及以上学术论文全集，按年份排列并标注 CCF 与 SCI 等级。" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Publications" title="学术论文" description="仅收录 CCF 推荐目录 C 类及以上论文，按年份排列、同年内按 CCF A → B → C 排序；等级依据中国计算机学会官网分领域目录核对。" />
      <Section eyebrow="Complete Bibliography" title="按年份浏览" description={publicationSummary.note}>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="h-fit border-t-2 border-[#0f6fa8] bg-[#f7fafc] p-6 lg:sticky lg:top-28">
            <p className="font-mono text-4xl font-light text-[#092a49]">{publicationSummary.total}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-400">CCF-A/B/C Papers</p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2"><dt className="text-slate-600">CCF A</dt><dd className="font-mono font-semibold text-[#092a49]">{publicationSummary.ccfA}</dd></div>
              <div className="flex items-center gap-2"><dt className="text-slate-600">CCF B</dt><dd className="font-mono font-semibold text-[#0f6fa8]">{publicationSummary.ccfB}</dd></div>
              <div className="flex items-center gap-2"><dt className="text-slate-600">CCF C</dt><dd className="font-mono font-semibold text-slate-600">{publicationSummary.ccfC}</dd></div>
            </dl>
          </aside>
          <PublicationList publications={publications} />
        </div>
      </Section>
    </>
  );
}

