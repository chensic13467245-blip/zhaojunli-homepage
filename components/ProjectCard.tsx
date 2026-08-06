import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_50px_rgba(15,55,85,0.08)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0f6fa8]">{project.type}</span>
        <span className={`shrink-0 px-2 py-1 text-xs font-semibold ${project.role === "主持" ? "bg-[#0b3158] text-white" : "bg-slate-100 text-slate-600"}`}>{project.role}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-8 text-slate-950">{project.title}</h3>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-7 font-mono text-xs text-slate-500">
        <span>{project.period}</span>
        {project.code ? <span>{project.code}</span> : null}
      </div>
    </article>
  );
}

