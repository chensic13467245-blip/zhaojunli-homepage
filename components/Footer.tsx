import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#071f36] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="text-lg font-semibold tracking-wide">赵俊莉 <span className="ml-2 text-sm font-normal text-slate-400">Junli Zhao</span></p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{profile.affiliation}</p>
          <a className="mt-2 inline-block text-sm text-sky-300 hover:text-white" href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-slate-300 sm:grid-cols-3">
          <Link href="/research" className="hover:text-white">研究方向</Link>
          <Link href="/publications" className="hover:text-white">学术论文</Link>
          <Link href="/projects" className="hover:text-white">科研项目</Link>
          <Link href="/team" className="hover:text-white">实验室团队</Link>
          <Link href="/news" className="hover:text-white">新闻动态</Link>
          <Link href="/contact" className="hover:text-white">联系方式</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs tracking-wide text-slate-500">
        © 2026 Junli Zhao Academic Homepage · 内容依据教授个人简历整理
      </div>
    </footer>
  );
}

