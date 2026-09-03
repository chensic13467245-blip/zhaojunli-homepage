import Image from "next/image";
import Link from "next/link";
import { patents, softwareCopyrights, type IntellectualProperty } from "@/content/intellectualProperty";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { representativePublications } from "@/content/publications";
import { researchAreas } from "@/content/research";
import { teamMembers, teamSummary } from "@/content/team";
import { PublicationCard } from "./PublicationCard";
import { Section } from "./Section";

function OutputList({ title, items }: { title: string; items: IntellectualProperty[] }) {
  const visibleItems = items.slice(0, 4);
  const remainingItems = items.slice(4);

  const renderItem = (item: IntellectualProperty) => (
    <article key={item.number} className="grid grid-cols-[1fr_auto] gap-4 py-3.5">
      <div><p className="text-sm font-medium leading-6 text-slate-800">{item.title}</p><p className="mt-0.5 font-mono text-xs text-slate-400">{item.number}</p></div>
      <span className="font-mono text-xs text-[#0f6fa8]">{item.year}</span>
    </article>
  );

  return (
    <div>
      <h3 className="border-b-2 border-[#0f6fa8] pb-3 text-xl font-semibold text-[#092a49]">{title}</h3>
      <div className="divide-y divide-slate-200">{visibleItems.map(renderItem)}</div>
      {remainingItems.length ? (
        <details className="group border-t border-slate-200">
          <summary className="cursor-pointer list-none py-3 text-sm font-semibold text-[#0f6fa8] marker:content-none">查看全部 {items.length} 项 <span className="inline-block transition-transform group-open:rotate-180" aria-hidden="true">↓</span></summary>
          <div className="divide-y divide-slate-200 border-t border-slate-200">{remainingItems.map(renderItem)}</div>
        </details>
      ) : null}
    </div>
  );
}

export function HomePageContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#0f6fa8]" />
        <div className="page-shell grid items-center gap-10 py-14 md:grid-cols-[1fr_280px] lg:gap-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow">Professor of Computer Science</p>
            <h1 className="mt-4 text-6xl font-semibold tracking-[-0.06em] text-[#082744] sm:text-7xl lg:text-8xl">赵俊莉</h1>
            <p className="mt-3 text-sm tracking-[0.18em] text-slate-500 sm:text-base">JUNLI ZHAO</p>
            <p className="mt-7 text-xl font-medium text-slate-900">{profile.title}</p>
            <p className="mt-1 text-base text-slate-600">{profile.affiliation}</p>
            <a href={`mailto:${profile.contact.email}`} className="mt-3 inline-block text-sm font-semibold text-[#0f6fa8] hover:text-[#092a49]">{profile.contact.email}</a>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              <span>Computer Graphics</span><span>Computer Vision</span><span>Virtual Reality</span><span>4D Face & Craniofacial Reconstruction</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#research" className="button-primary">研究方向 <span aria-hidden="true">↓</span></a>
              <a href="#publications" className="button-secondary">代表论文</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="absolute -right-4 -top-4 h-full w-full border border-sky-200 bg-sky-50" />
            <div className="relative border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(13,54,84,0.14)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100"><Image src="/images/profile/zhao-junli.jpg" alt="赵俊莉教授" fill priority sizes="280px" className="object-cover object-top" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#092a49] text-white">
        <div className="page-shell grid divide-y divide-white/10 py-1 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[["图形学 · 视觉 · 虚拟现实", "Research"], [`${projects.length} 项`, "主持项目"], ["AAAI · TVCG · ICCV · ACM MM", "代表性成果"]].map(([value, label]) => (
            <div key={label} className="px-5 py-5 first:pl-0 sm:px-7 sm:first:pl-0"><p className="text-lg font-semibold">{value}</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-sky-200/70">{label}</p></div>
          ))}
        </div>
      </section>

      <Section id="about" eyebrow="About" title="个人简介" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div><p className="text-base leading-8 text-slate-700">{profile.intro}</p><p className="mt-5 text-base leading-8 text-slate-600">近年来主持国家自然科学基金面上项目、青年项目、博士后科学基金项目等，研究成果发表于图形学、计算机视觉与多媒体领域重要期刊和会议。</p></div>
          <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0f6fa8]">Academic Highlights</p><ul className="border-t border-slate-200">{profile.highlights.map((item) => <li key={item} className="border-b border-slate-200 py-2.5 text-sm leading-6 text-slate-700">{item}</li>)}</ul></div>
        </div>
      </Section>

      <Section id="research" eyebrow="Research" title="研究方向" description="围绕三维视觉内容的表示、理解、生成与交互，开展几何计算和智能方法研究。" className="scroll-mt-20 border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid border-y border-slate-200 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <article key={area.id} className="border-b border-slate-200 py-5 md:odd:border-r md:odd:pr-7 md:even:pl-7">
              <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-[#0f6fa8]">{String(index + 1).padStart(2, "0")}</span><span className="text-right text-xs uppercase tracking-[0.12em] text-slate-400">{area.englishTitle}</span></div>
              <h3 className="mt-4 text-lg font-semibold text-[#092a49]">{area.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{area.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Funding Programs" title="科研项目" description="仅展示主持的主要科研项目，信息按项目名称、类别与执行时间简要列出。" className="scroll-mt-20">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {projects.map((project) => <article key={project.title} className="grid gap-2 py-4 md:grid-cols-[1fr_190px_120px_48px] md:items-center md:gap-5"><h3 className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">{project.title}</h3><p className="text-sm text-slate-500">{project.type}</p><p className="font-mono text-xs text-[#0f6fa8] md:text-right">{project.period}</p><p className="text-xs font-semibold text-slate-500 md:text-right">{project.role}</p></article>)}
        </div>
      </Section>

      <Section id="publications" eyebrow="Representative Publications" title="代表性论文" description="首页仅展示 CCF A 与 CCF B 代表成果，每篇附会议/期刊标识与论文代表图；链接仅在已确认真实来源时显示。" className="scroll-mt-20 border-t border-slate-200 bg-[#f7fafc]">
        <div className="border-b border-slate-200">{representativePublications.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
        <div className="mt-7 text-right"><Link href="/publications" className="text-link">查看全部论文 / View All Publications →</Link></div>
      </Section>

      <Section id="team" eyebrow="Team" title="虚拟现实研究团队" description={teamSummary} className="scroll-mt-20">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {teamMembers.map((member) => <article key={member.name} className="grid gap-1 py-4 md:grid-cols-[120px_220px_1fr] md:items-start md:gap-5">{member.profileUrl ? <a href={member.profileUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#092a49] hover:text-[#0f6fa8]">{member.name} ↗</a> : <span className="font-semibold text-[#092a49]">{member.name}</span>}<span className="text-sm text-slate-600">{member.role}</span><span className="text-sm leading-6 text-slate-500">{member.research ?? "—"}</span></article>)}
        </div>
        <p className="mt-3 text-xs text-slate-500">仅展示官网与现有团队资料能够确认的公开信息，不展示成员照片。</p>
      </Section>

      <Section id="intellectual-property" eyebrow="Patents & Software" title="专利与软件著作权" className="scroll-mt-20 border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid gap-10 lg:grid-cols-2"><OutputList title="授权专利" items={patents} /><OutputList title="软件著作权" items={softwareCopyrights} /></div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="联系方式" className="scroll-mt-20 border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
          <div className="bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-slate-400">Email</p><a href={`mailto:${profile.contact.email}`} className="mt-3 block text-lg font-semibold text-[#0f6fa8] hover:text-[#092a49]">{profile.contact.email}</a></div>
          <div className="bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-slate-400">Affiliation</p><p className="mt-3 text-lg font-semibold text-[#092a49]">{profile.contact.office}</p></div>
        </div>
      </Section>
    </>
  );
}
