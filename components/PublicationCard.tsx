import type { Publication } from "@/content/publications";

export function PublicationCard({ publication, compact = false }: { publication: Publication; compact?: boolean }) {
  return (
    <article className={`group border-t border-slate-200 py-6 ${compact ? "first:border-t-0" : "sm:grid sm:grid-cols-[72px_1fr] sm:gap-6"}`}>
      {!compact ? <div className="mb-2 font-mono text-sm font-semibold text-[#0f6fa8] sm:mb-0">{publication.year}</div> : null}
      <div>
        <h3 className="text-base font-semibold leading-7 text-slate-950 transition-colors group-hover:text-[#0f6fa8] sm:text-lg">{publication.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{publication.authors}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="italic text-slate-500">{publication.venue}</span>
          {publication.ranking?.map((rank) => (
            <span key={rank} className="border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[#0b5f91]">{rank}</span>
          ))}
          {publication.doi ? <a href={publication.doi} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#0f6fa8] underline decoration-sky-200 underline-offset-4">DOI</a> : null}
        </div>
      </div>
    </article>
  );
}

