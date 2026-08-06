import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { academicAppointments, education, experience, profile, teaching } from "@/content/profile";

export const metadata: Metadata = { title: "个人简介", description: "赵俊莉教授的基本信息、教育经历、工作经历与学术任职。" };

function Timeline({ items }: { items: typeof education }) {
  return (
    <div className="border-l border-slate-200">
      {items.map((item) => (
        <article key={`${item.period}-${item.title}`} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
          <span className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-[#0f6fa8] ring-4 ring-white" />
          <p className="font-mono text-xs font-semibold text-[#0f6fa8]">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="个人简介" description="从数字几何处理到智能颅面重建，围绕三维视觉与虚拟现实开展科研、教学和学术服务。" />
      <Section eyebrow="Profile" title="基本信息">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
              <Image src="/images/profile/zhao-junli.jpg" alt="赵俊莉教授" fill sizes="300px" className="object-cover object-top" />
            </div>
            <dl className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
              <div className="flex justify-between gap-5"><dt className="text-slate-400">姓名</dt><dd className="font-medium text-slate-900">赵俊莉 / Junli Zhao</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-slate-400">职称</dt><dd className="font-medium text-slate-900">教授、博士生导师</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-slate-400">学校</dt><dd className="font-medium text-slate-900">青岛大学</dd></div>
            </dl>
          </div>
          <div>
            <p className="text-lg leading-9 text-slate-700">{profile.intro}</p>
            <div className="mt-10 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {profile.highlights.map((item, index) => (
                <div key={item} className={`bg-white p-6 ${index === profile.highlights.length - 1 ? "sm:col-span-2" : ""}`}>
                  <span className="font-mono text-xs text-[#0f6fa8]">0{index + 1}</span>
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Education & Experience" title="教育与工作经历" className="bg-[#f7fafc]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div><h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">教育经历</h3><Timeline items={education} /></div>
          <div><h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">工作经历</h3><Timeline items={experience} /></div>
        </div>
      </Section>
      <Section eyebrow="Academic Service" title="学术任职">
        <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
          {academicAppointments.map((item, index) => (
            <div key={item} className="flex gap-5 bg-white p-6 sm:p-7"><span className="font-mono text-xs text-[#0f6fa8]">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-7 text-slate-700">{item}</p></div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Teaching" title="主讲课程" className="border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid gap-6 md:grid-cols-2">
          {[{ title: "本科生课程", items: teaching.undergraduate }, { title: "研究生课程", items: teaching.postgraduate }].map((group) => (
            <div key={group.title} className="bg-white p-7 sm:p-8"><h3 className="text-lg font-semibold text-[#092a49]">{group.title}</h3><ul className="mt-6 space-y-3">{group.items.map((item) => <li key={item} className="border-l-2 border-sky-300 pl-4 text-sm text-slate-600">{item}</li>)}</ul></div>
          ))}
        </div>
      </Section>
    </>
  );
}

