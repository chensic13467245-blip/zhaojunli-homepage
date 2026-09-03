import Image from "next/image";
import type { Publication } from "@/content/publications";

function AuthorList({ authors }: { authors: string }) {
  return (
    <>
      {authors.split(/(Junli Zhao|Jun-Li Zhao|赵俊莉)/gi).map((part, index) =>
        /^(Junli Zhao|Jun-Li Zhao|赵俊莉)$/i.test(part) ? <strong key={`${part}-${index}`} className="font-bold text-slate-900">{part}</strong> : part,
      )}
    </>
  );
}

export function PublicationCard({ publication, compact = false }: { publication: Publication; compact?: boolean }) {
  const resources = [
    ["PDF", publication.pdf],
    ["Code", publication.code],
    ["Project", publication.project],
    ["Video", publication.video],
    ["DOI", publication.doi],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <article className={`group border-t border-slate-200 py-6 ${compact ? "first:border-t-0" : "sm:grid sm:grid-cols-[72px_1fr] sm:gap-6"}`}>
      {!compact ? <div className="mb-2 font-mono text-sm font-semibold text-[#0f6fa8] sm:mb-0">{publication.year}</div> : null}
      <div className={publication.image ? "grid gap-5 md:grid-cols-[260px_1fr] md:items-start" : ""}>
        {publication.image ? (
          <div className="relative aspect-[16/9] overflow-hidden border border-slate-200 bg-[#092a49]">
            <Image src={publication.image} alt={`${publication.title} 代表图`} fill sizes="(max-width: 768px) 100vw, 260px" className="object-cover" />
          </div>
        ) : null}
        <div>
          <h3 className="text-base font-semibold leading-7 text-slate-950 transition-colors group-hover:text-[#0f6fa8] sm:text-lg">{publication.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600"><AuthorList authors={publication.authors} /></p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            {publication.badge ? (
              <span className="bg-[#092a49] px-2 py-0.5 text-xs font-semibold tracking-wide text-white">{publication.badge}</span>
            ) : null}
            <span className="italic text-slate-500">{publication.venue}</span>
            {publication.ranking?.map((rank) => (
              <span key={rank} className="border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[#0b5f91]">{rank}</span>
            ))}
          </div>
          {resources.length ? (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {resources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#0f6fa8] underline decoration-sky-200 underline-offset-4">{label}</a>)}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
