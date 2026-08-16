import { Badge } from '../../components/ui/badge';
import { projectsContent as content } from './content';

export function Projects() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono uppercase mb-4">PROJECTS</h2>
        <div className="w-20 h-1 bg-[var(--color-accent)] mb-16"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-bold">{project.title}</h4>
                {project.isOpenSource && (
                  <Badge variant="outline" className="text-xs text-gray-300">
                    Open Source
                  </Badge>
                )}
              </div>

              {project.year && (
                <p className="text-gray-400 text-sm mb-2">{project.year}</p>
              )}

              {project.description && (
                <p className="text-gray-300 mb-2">{project.description}</p>
              )}

              <ul className="list-disc list-inside space-y-1 text-gray-300 mt-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
