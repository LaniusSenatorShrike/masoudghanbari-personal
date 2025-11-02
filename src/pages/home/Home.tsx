import { Badge } from '../../components/ui/badge';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { aboutContent as content } from './about-content';
import { homeContent } from './content';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <div className="accent-line pl-8">
            <h3 className="mb-6">{content.bio.title}</h3>
            <div className="space-y-4 text-gray-400">
              {content.bio.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Profile Image */}
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[var(--color-accent)]"></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="mb-8">{content.skills.title}</h3>
          <div className="flex flex-wrap gap-3">
            {content.skills.items.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 border-gray-600 text-gray-400 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
