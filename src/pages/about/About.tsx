import { Badge } from '../../components/ui/badge';
import { aboutContent as content } from './content';

export function About() {
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

          {/* Empty space for balance */}
          <div></div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="mb-8">{content.skills.title}</h3>
          <div className="flex flex-wrap gap-3">
            {content.skills.items.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 border-gray-600 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
