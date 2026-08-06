"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/content/publications";
import { PublicationCard } from "./PublicationCard";

export function PublicationList({ publications }: { publications: Publication[] }) {
  const years = useMemo(() => Array.from(new Set(publications.map((item) => item.year))).sort((a, b) => b - a), [publications]);
  const [year, setYear] = useState<number | "all">("all");
  const visible = year === "all" ? publications : publications.filter((item) => item.year === year);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="按年份筛选论文">
        <button type="button" onClick={() => setYear("all")} className={`min-h-10 px-4 text-sm font-medium ${year === "all" ? "bg-[#0b3158] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All</button>
        {years.map((item) => (
          <button key={item} type="button" onClick={() => setYear(item)} className={`min-h-10 px-4 text-sm font-medium ${year === item ? "bg-[#0b3158] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{item}</button>
        ))}
      </div>
      <p className="mb-3 text-sm text-slate-500">当前显示 {visible.length} 篇</p>
      <div>
        {visible.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}
      </div>
    </div>
  );
}

