import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white fixed w-full z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex space-x-4">
          {sections.map(({ id, label }) => (
            <Link key={id} href={`#${id}`} className="hover:text-teal-300 transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="flex-1 mt-12 px-4 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Ram Sankar Koripalli
      </footer>
    </div>
  );
}
