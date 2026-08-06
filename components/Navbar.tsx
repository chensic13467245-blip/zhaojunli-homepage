"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页", en: "Home" },
  { href: "/about", label: "个人简介", en: "About" },
  { href: "/research", label: "研究", en: "Research" },
  { href: "/projects", label: "项目", en: "Projects" },
  { href: "/publications", label: "论文", en: "Publications" },
  { href: "/awards", label: "荣誉", en: "Awards" },
  { href: "/team", label: "团队", en: "Team" },
  { href: "/news", label: "动态", en: "News" },
  { href: "/contact", label: "联系", en: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <a className="skip-link" href="#main-content">跳至主要内容</a>
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center bg-[#0b3158] text-sm font-semibold tracking-wider text-white transition-colors group-hover:bg-[#0f6fa8]">ZJ</span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-[0.08em] text-slate-950">赵俊莉</span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:block">Junli Zhao · Qingdao University</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium transition-colors ${active ? "text-[#0f6fa8]" : "text-slate-600 hover:text-slate-950"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate-200 text-sm font-medium text-slate-800 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-slate-100 bg-white px-5 py-4 xl:hidden" aria-label="移动端导航">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-1 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-12 flex-col justify-center border-l-2 px-3 ${pathname === item.href ? "border-[#0f6fa8] bg-sky-50 text-[#0b3158]" : "border-transparent text-slate-700"}`}
                onClick={() => setOpen(false)}
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">{item.en}</span>
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

