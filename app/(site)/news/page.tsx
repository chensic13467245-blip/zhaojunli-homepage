import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { newsItems } from "@/content/news";

export const metadata: Metadata = { title: "新闻动态", description: "赵俊莉教授的科研项目、学术论文与荣誉动态。" };

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News" title="新闻动态" description="记录科研项目、学术成果与团队荣誉。当前条目由个人简历中已确认的事实整理。" />
      <Section eyebrow="Updates" title="最新动态">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {newsItems.map((item) => (
            <article key={`${item.date}-${item.title}`} className="grid gap-5 py-8 sm:grid-cols-[130px_1fr] sm:gap-8 sm:py-10">
              <div><p className="font-mono text-sm font-semibold text-[#0f6fa8]">{item.date}</p><span className="mt-3 inline-block bg-slate-100 px-2.5 py-1 text-xs text-slate-500">{item.category}</span></div>
              <div><h2 className="text-xl font-semibold leading-8 text-slate-950">{item.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.summary}</p></div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

