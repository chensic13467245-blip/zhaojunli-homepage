import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, description, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="page-shell">
        <div className="mb-10 max-w-3xl sm:mb-12">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

