import { Github, Linkedin, Mail, Twitter, GraduationCap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/masoudghanbari', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/masoudghanbari', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:connect@masoudghanbari.com', label: 'Email' },
    { icon: GraduationCap, href: 'https://scholar.google.de/citations?hl=en&user=80SOOu8AAAAJ', label: 'Google Scholar' },
  ];

  return (
    <footer className="py-16 px-6 border-t border-gray-800 light:border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl mb-2">Masoud Ghanbari</p>
            <p className="text-gray-400 light:text-gray-600">
              Tech Lead | Data Architect | Amsterdam 🇳🇱
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-700 light:border-gray-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 light:border-gray-300 text-center text-gray-400 light:text-gray-600">
          <p>
            © {currentYear} Masoud Ghanbari. Built with Next.js & TypeScript.
          </p>
          <p className="mt-2 text-sm">
            Press{' '}
            <kbd className="px-2 py-1 bg-gray-800 light:bg-gray-200 border border-gray-700 light:border-gray-300 rounded text-xs">
              Cmd+K
            </kbd>{' '}
            to open command palette
          </p>
        </div>
      </div>
    </footer>
  );
}
