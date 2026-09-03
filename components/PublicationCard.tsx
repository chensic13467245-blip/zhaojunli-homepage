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

function RankingChip({ rank }: { rank: string }) {
  const style =
    rank === "CCF A"
      ? "border-transparent bg-[#092a49] text-white"
      : rank === "CCF B"
        ? "border-transparent bg-[#0f6fa8] text-white"
        : rank === "CCF C"
          ? "border-slate-300 bg-white text-slate-600"
          : "border-sky-200 bg-sky-50 text-[#0b5f91]";
  return <span className={`border px-2 py-0.5 text-xs font-semibold ${style}`}>{rank}</span>;
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
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {publication.venueImage ? (
              <Image src={publication.venueImage} alt={`${publication.badge ?? publication.venue} 标识`} width={120} height={17} className="h-[17px] w-auto object-contain" />
            ) : null}
            {publication.badge ? (
              <span className="border border-slate-300 bg-white px-2 py-0.5 text-xs font-semibold tracking-wide text-slate-600">{publication.badge}</span>
            ) : null}
            <span className="text-sm italic text-slate-500">{publication.venue}</span>
            {publication.ranking?.map((rank) => <RankingChip key={rank} rank={rank} />)}
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
