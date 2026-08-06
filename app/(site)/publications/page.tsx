import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { publications, publicationSummary } from "@/content/publications";

export const metadata: Metadata = { title: "学术论文", description: "赵俊莉教授的精选学术论文，按年份排序并标注简历中已提供的CCF和SCI等级。" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Publications" title="学术论文" description="研究成果涵盖计算机图形学、三维视觉、颅面复原、图像分析与智能生成。等级信息仅在个人简历明确列出时展示。" />
      <Section eyebrow="Selected Bibliography" title="按年份浏览" description={publicationSummary.note}>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="h-fit border-t-2 border-[#0f6fa8] bg-[#f7fafc] p-6 lg:sticky lg:top-28">
            <p className="font-mono text-4xl font-light text-[#092a49]">{publicationSummary.totalInCv}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-400">Records in CV</p>
            <p className="mt-6 text-sm leading-7 text-slate-600">页面数据采用独立 TypeScript 结构维护，可持续追加标题、作者、期刊/会议、等级与 DOI。</p>
          </aside>
          <PublicationList publications={publications} />
        </div>
      </Section>
    </>
  );
}

