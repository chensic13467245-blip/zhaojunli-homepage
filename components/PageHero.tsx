type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7fafc] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-[32%] bg-[linear-gradient(135deg,transparent_0%,rgba(14,116,170,0.07)_100%)] lg:block" />
      <div className="page-shell relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#092a49] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}

