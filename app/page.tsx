import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PublicationCard } from "@/components/PublicationCard";
import { profile } from "@/content/profile";
import { researchAreas } from "@/content/research";
import { featuredPublications, publicationSummary } from "@/content/publications";
import { projects } from "@/content/projects";
import { newsItems } from "@/content/news";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#0f6fa8]" />
        <div className="page-shell grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow">Professor of Computer Science</p>
            <h1 className="mt-5 text-6xl font-semibold tracking-[-0.065em] text-[#082744] sm:text-7xl lg:text-[96px] lg:leading-[0.95]">
              赵俊莉
            </h1>
            <p className="mt-5 text-lg tracking-[0.12em] text-slate-500 sm:text-xl">JUNLI ZHAO</p>
            <div className="mt-8 h-px max-w-2xl bg-slate-200" />
            <p className="mt-8 text-xl font-medium text-slate-900 sm:text-2xl">{profile.title}</p>
            <p className="mt-2 text-base text-slate-600 sm:text-lg">{profile.affiliation}</p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{profile.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/research" className="button-primary">了解研究方向 <span aria-hidden="true">→</span></Link>
              <Link href="/publications" className="button-secondary">查看学术论文</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
            <div className="absolute -right-6 -top-6 h-full w-full border border-sky-200 bg-sky-50" />
            <div className="relative border border-slate-200 bg-white p-4 shadow-[0_32px_90px_rgba(13,54,84,0.14)] sm:p-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image src="/images/profile/zhao-junli.jpg" alt="赵俊莉教授" fill priority sizes="(max-width: 1024px) 80vw, 420px" className="object-cover object-top" />
              </div>
              <div className="flex items-end justify-between gap-4 pt-5">
                <div>
                  <p className="text-sm font-semibold text-[#0b3158]">计算机视觉研究所</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Qingdao University</p>
                </div>
                <span className="font-mono text-xs text-[#0f6fa8]">QD / CN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#092a49] text-white">
        <div className="page-shell grid divide-y divide-white/10 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ["教授 · 博导", "Academic Position"],
            [`${projects.filter((item) => item.role === "主持").length} 项`, "Principal Investigator"],
            [`${publicationSummary.totalInCv} 篇`, "Publications in CV"],
            ["7 项", "Academic Service Roles"],
          ].map(([value, label]) => (
            <div key={label} className="px-5 py-7 first:pl-0 sm:px-7 sm:first:pl-0">
              <p className="text-2xl font-semibold">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-sky-200/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="Research" title="研究聚焦" description="从基础几何计算到智能视觉系统，关注三维颅面建模与生成的方法和应用。" className="bg-[#f7fafc]">
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.slice(0, 6).map((area, index) => (
            <Link key={area.id} href={`/research#${area.id}`} className="group min-h-64 bg-white p-7 transition-colors hover:bg-sky-50 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#0f6fa8]">0{index + 1}</span>
                <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0f6fa8]" aria-hidden="true">→</span>
              </div>
              <h3 className="mt-12 text-xl font-semibold text-[#092a49]">{area.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-400">{area.englishTitle}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{area.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-right"><Link href="/research" className="text-link">查看全部研究方向 →</Link></div>
      </Section>

      <Section eyebrow="Selected Publications" title="精选论文" description="发表于图形学、视觉和人工智能领域主要期刊与会议的部分成果。">
        <div className="border-b border-slate-200">
          {featuredPublications.slice(0, 5).map((publication) => <PublicationCard key={publication.id} publication={publication} />)}
        </div>
        <div className="mt-8 text-right"><Link href="/publications" className="text-link">浏览论文目录 →</Link></div>
      </Section>

      <Section eyebrow="Latest" title="学术动态" className="border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.slice(0, 3).map((item) => (
            <article key={`${item.date}-${item.title}`} className="border-t-2 border-[#0f6fa8] bg-white p-6 shadow-[0_8px_30px_rgba(13,54,84,0.05)]">
              <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-400"><span>{item.date}</span><span>{item.category}</span></div>
              <h3 className="mt-7 text-lg font-semibold leading-8 text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-right"><Link href="/news" className="text-link">查看更多动态 →</Link></div>
      </Section>
    </>
  );
}

