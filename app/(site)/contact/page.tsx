import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "联系方式", description: "赵俊莉教授的邮箱、电话与单位信息。" };

export default function ContactPage() {
  const contacts = [
    { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { label: "Phone", value: profile.contact.phone, href: `tel:${profile.contact.phone}` },
    { label: "Affiliation", value: profile.contact.office },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="联系方式" description="欢迎就学术交流、科研合作与研究生培养等事宜联系。" />
      <Section eyebrow="Get in Touch" title="联系信息">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {contacts.map((item) => (
              <div key={item.label} className="grid gap-2 py-7 sm:grid-cols-[130px_1fr] sm:items-start">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</dt>
                <dd className="text-base leading-7 text-slate-900">{item.href ? <a href={item.href} className="font-medium text-[#0f6fa8] underline decoration-sky-200 underline-offset-4 hover:text-[#092a49]">{item.value}</a> : item.value}</dd>
              </div>
            ))}
          </div>
          <aside className="bg-[#092a49] p-7 text-white sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Academic Collaboration</p>
            <h2 className="mt-6 text-2xl font-semibold">学术合作</h2>
            <p className="mt-4 text-sm leading-8 text-slate-300">研究方向涉及计算机图形学、计算机视觉、虚拟现实、人工智能、三维颅面重建与4D人脸生成。</p>
            <a href={`mailto:${profile.contact.email}`} className="mt-8 inline-flex min-h-11 items-center border border-white/30 px-5 text-sm font-semibold transition hover:bg-white hover:text-[#092a49]">发送邮件 <span className="ml-3" aria-hidden="true">→</span></a>
          </aside>
        </div>
        <p className="mt-8 text-xs leading-6 text-slate-400">说明：联系信息来自教授个人简历；简历未提供具体办公楼与房间号，因此本页不做补写。</p>
      </Section>
    </>
  );
}

