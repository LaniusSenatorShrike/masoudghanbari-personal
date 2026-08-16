import { Badge } from '../../components/ui/badge';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { homeContent } from './content';

export function Home() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <h1 className="font-mono uppercase text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {homeContent.name}
            </h1>
            <p className="text-xl text-[var(--color-accent)] mb-2">{homeContent.role}</p>
            <p className="text-gray-400 mb-6">{homeContent.location}</p>
            <p className="text-gray-300 mb-8 leading-relaxed">{homeContent.summary}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {homeContent.labels.map((label) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="px-4 py-2 border-gray-600 text-gray-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {label}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {homeContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 px-4 py-2 hover:border-[var(--color-accent)] transition-colors text-sm font-mono uppercase"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--color-accent)] opacity-10"></div>
              <div className="relative w-80 h-80 bg-gray-800 overflow-hidden">
                <ImageWithFallback
                  src={homeContent.profileImage}
                  alt={homeContent.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
