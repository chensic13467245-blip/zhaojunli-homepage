import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { publications, publicationSummary } from "@/content/publications";

export const metadata: Metadata = { title: "学术论文", description: "赵俊莉教授的学术论文全集，按年份排列并标注CCF和SCI等级。" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Publications" title="学术论文" description="全部论文集中于本页，按年份排列，涵盖计算机图形学、三维视觉、颅面复原、图像分析与智能生成。等级信息仅在论文原文或个人简历明确时展示。" />
      <Section eyebrow="Complete Bibliography" title="按年份浏览" description={publicationSummary.note}>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="h-fit border-t-2 border-[#0f6fa8] bg-[#f7fafc] p-6 lg:sticky lg:top-28">
            <p className="font-mono text-4xl font-light text-[#092a49]">{publicationSummary.total}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-400">Publications</p>
            <p className="mt-6 text-sm leading-7 text-slate-600">全部条目依据论文原文核对，作者列表中 Junli Zhao / 赵俊莉 加粗显示。</p>
          </aside>
          <PublicationList publications={publications} />
        </div>
      </Section>
    </>
  );
}

