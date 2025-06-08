import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import ramImg from '../data/ram.jpg';
import aggieImg from '../data/aggiepark.jpg';
import Layout from '../components/Layout';
import Section from '../components/Section';

interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: { email: string; phone: string; linkedin: string; github: string };
  skills: { languages: string[]; frameworks: string[]; tools: string[] };
  projects: { title: string; dates?: string; description?: string; link?: string }[];
  experience: { company: string; role: string; location: string; dates: string; bullets: string[] }[];
  education: { school: string; degree: string; dates: string; gpa?: string; cgpa?: string }[];
}

export async function getStaticProps() {
  const file = fs.readFileSync(path.join(process.cwd(), 'data/resume.md'), 'utf8');
  const { data } = matter(file);
  return { props: { resume: data as Resume } };
}

type Props = {
  resume: Resume;
};

export default function Home({ resume }: Props) {
  const { name, title, summary, contact, skills, projects, experience, education } = resume;
  return (
    <Layout>
      <header className="flex flex-col items-center text-center py-20" id="hero">
        <Image src={ramImg} alt={name} width={160} height={160} className="rounded-full" />
        <h1 className="text-4xl font-bold mt-4">{name}</h1>
        <h2 className="text-xl text-gray-600 mt-2">{title}</h2>
        <p className="mt-4 max-w-xl">{summary}</p>
      </header>

      <Section id="about" title="About">
        <p>{summary}</p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium">Languages</h3>
            <ul className="list-disc list-inside">
              {skills.languages.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Frameworks</h3>
            <ul className="list-disc list-inside">
              {skills.frameworks.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Tools</h3>
            <ul className="list-disc list-inside">
              {skills.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        {projects.map((proj) => (
          <div key={proj.title} className="mb-6">
            <h3 className="text-lg font-semibold">
              {proj.link ? (
                <a href={proj.link} className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {proj.title}
                </a>
              ) : (
                proj.title
              )}
            </h3>
            {proj.dates && <p className="text-sm text-gray-500">{proj.dates}</p>}
            <p>{proj.description}</p>
          </div>
        ))}
      </Section>

      <Section id="experience" title="Experience">
        {experience.map((exp) => (
          <div key={exp.company + exp.role} className="mb-8">
            <h3 className="font-semibold">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-gray-500">
              {exp.location} | {exp.dates}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.school} className="">
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-sm text-gray-500">{edu.degree} | {edu.dates}</p>
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
              {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Image src={aggieImg} alt="Aggie Park" width={800} height={450} className="rounded" />
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <ul className="space-y-2">
          <li>Email: <a href={`mailto:${contact.email}`} className="text-teal-600 hover:underline">{contact.email}</a></li>
          <li>Phone: {contact.phone}</li>
          <li><a href={contact.linkedin} className="text-teal-600 hover:underline">LinkedIn</a></li>
          <li><a href={contact.github} className="text-teal-600 hover:underline">GitHub</a></li>
        </ul>
      </Section>
    </Layout>
  );
}
