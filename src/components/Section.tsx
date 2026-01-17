import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  centered?: boolean;
}>;

export function Section({ title, subtitle, centered, children }: SectionProps) {
  const headerClass = centered ? 'mb-8 animate-float text-center' : 'mb-8 animate-float';
  const titleClass = centered
    ? 'text-4xl md:text-5xl font-bold tracking-tight text-neon-cyan font-display mx-auto'
    : 'text-4xl md:text-5xl font-bold tracking-tight text-neon-cyan font-display';
  const subtitleClass = centered
    ? 'mt-3 text-lg text-neutral-400 mx-auto'
    : 'mt-3 text-lg text-neutral-400';
  const bodyClass = centered
    ? 'prose prose-invert max-w-none mx-auto'
    : 'prose prose-invert max-w-none';

  return (
    <section className="container py-12">
      <header className={headerClass}>
        <h2 className={titleClass}>{title}</h2>
        {subtitle && (
          <p className={subtitleClass}>{subtitle}</p>
        )}
      </header>
      <div className={bodyClass}>{children}</div>
    </section>
  );
}
