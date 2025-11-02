import { useState } from 'react';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ExternalLink, Github } from 'lucide-react';
import { projectsContent as content } from './content';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? content.projects
      : content.projects.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Category Filter */}
        <Tabs
          defaultValue="All"
          className="mb-12"
          onValueChange={(value) => setActiveCategory(value)}
        >
          <TabsList className="grid w-full max-w-md grid-cols-4">
            {content.categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="mb-3">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4 pb-4 border-b border-gray-700">
                <p className="text-sm text-[var(--color-accent)]">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
