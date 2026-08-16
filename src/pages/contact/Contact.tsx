import { Mail, Linkedin, Github, GraduationCap, Twitter } from 'lucide-react';
import { contactContent as content } from './content';

const iconMap = {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Twitter,
};

export function Contact() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono uppercase mb-4">CONNECT</h2>
        <div className="w-20 h-1 bg-[var(--color-accent)] mb-16"></div>

        <p className="text-gray-300 mb-12">{content.message}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {content.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors flex flex-col items-center gap-3"
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-mono uppercase">{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
