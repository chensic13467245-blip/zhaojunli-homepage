import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { researchAreas } from "@/content/research";

export const metadata: Metadata = { title: "研究方向", description: "赵俊莉教授在计算机图形学、视觉、虚拟现实、颅面复原和4D人脸生成方面的研究。" };

export default function ResearchPage() {
  return (
    <>
      <PageHero eyebrow="Research" title="研究方向" description="在计算机图形学、视觉与人工智能的交叉地带，探索面向三维人脸和颅面计算的基础方法与应用技术。" />
      <Section eyebrow="Research Agenda" title="七个研究主题">
        <div className="space-y-5">
          {researchAreas.map((area, index) => (
            <article id={area.id} key={area.id} className="scroll-mt-28 border border-slate-200 bg-white p-6 transition hover:border-sky-300 sm:grid sm:grid-cols-[100px_1fr] sm:gap-8 sm:p-8 lg:grid-cols-[150px_1fr_auto]">
              <div className="font-mono text-3xl font-light text-sky-200">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#092a49]">{area.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{area.englishTitle}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">{area.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 sm:col-start-2 lg:col-start-3 lg:mt-0 lg:max-w-56 lg:justify-end">
                {area.keywords.map((keyword) => <span key={keyword} className="bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{keyword}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <section className="bg-[#092a49] py-14 text-white sm:py-16"><div className="page-shell"><p className="max-w-4xl text-2xl font-light leading-relaxed sm:text-3xl">用几何结构解释形状，用智能模型连接数据，为三维颅面计算建立可理解、可评价的方法。</p></div></section>
    </>
  );
}

