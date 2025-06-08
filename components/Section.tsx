import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-20">
      <h2 className="text-3xl font-semibold mb-6" data-testid={`${id}-heading`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
