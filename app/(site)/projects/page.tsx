import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "科研项目", description: "赵俊莉教授主持与参与的主要科研项目。" };

export default function ProjectsPage() {
  const hosted = projects.filter((project) => project.role === "主持");
  const participated = projects.filter((project) => project.role === "参与");
  return (
    <>
      <PageHero eyebrow="Projects" title="科研项目" description="围绕三维颅面计算、4D人脸生成、数字几何与虚拟现实展开的基础研究与应用开发。" />
      <Section eyebrow="Principal Investigator" title="主持项目" description={`个人简历中列示 ${hosted.length} 项主持项目。`}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{hosted.map((project) => <ProjectCard key={`${project.code}-${project.title}`} project={project} />)}</div>
      </Section>
      <Section eyebrow="Collaborative Research" title="参与项目" className="border-t border-slate-200 bg-[#f7fafc]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{participated.map((project) => <ProjectCard key={`${project.code}-${project.title}`} project={project} />)}</div>
      </Section>
    </>
  );
}

