import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";
import { researchAreas } from "@/content/research";

export const metadata: Metadata = { title: "实验室团队", description: "青岛大学计算机科学技术学院虚拟现实科研团队。" };

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="实验室团队" description="围绕计算机图形学、三维视觉、虚拟现实与颅面智能计算，开展基础研究、系统开发与人才培养。" />
      <Section eyebrow="Principal Investigator" title="团队负责人">
        <div className="grid overflow-hidden border border-slate-200 bg-[#f7fafc] md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr]">
          <div className="relative min-h-[380px] bg-slate-100"><Image src="/images/profile/zhao-junli.jpg" alt="赵俊莉教授" fill sizes="320px" className="object-cover object-top" /></div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Lab Director</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#092a49]">{profile.name}</h2>
            <p className="mt-2 text-base text-slate-500">{profile.title}</p>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-600">青岛大学计算机科学技术学院虚拟现实科研团队负责人，计算机视觉研究所副所长。</p>
            <div className="mt-7"><Link href="/about" className="text-link">查看个人简介 →</Link></div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Focus" title="团队研究主题" className="border-t border-slate-200 bg-[#f7fafc]">
        <div className="flex flex-wrap gap-3">{researchAreas.map((area) => <span key={area.id} className="border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">{area.title}</span>)}</div>
      </Section>
      <Section eyebrow="Members" title="团队成员">
        <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center sm:px-10">
          <p className="text-xl font-semibold text-[#092a49]">成员信息待更新</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">个人简历未列出团队成员姓名。为保证信息准确与成员隐私，本区域将在获得经本人确认的姓名、研究方向和照片后更新。</p>
        </div>
      </Section>
    </>
  );
}

