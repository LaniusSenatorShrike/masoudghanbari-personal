import { Badge } from '../../components/ui/badge';
import { TrendingUp, Database, Shield, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { blockchainContent as content } from './content';

const iconMap = {
  TrendingUp,
  Database,
  Shield,
};

export function Blockchain() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {content.projects.map((project) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <div
                key={project.id}
                className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="mb-6">
                  <Icon className="h-8 w-8 text-[var(--color-accent)]" />
                </div>
                
                <h4 className="mb-4">{project.title}</h4>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Chains</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.chains.map((chain) => (
                      <Badge key={chain} variant="outline" className="text-xs">
                        {chain}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-700">
                  <p className="text-sm text-[var(--color-accent)]">
                    {Object.values(project.metrics).join(' • ')}
                  </p>
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
            );
          })}
        </div>

        {/* Insights */}
        <div className="border border-gray-700 p-8 mb-12">
          <h3 className="mb-8">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.insights.map((insight) => (
              <div key={insight.title} className="accent-line pl-6">
                <h5 className="mb-2 text-[var(--color-accent)]">{insight.title}</h5>
                <p className="text-gray-400">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white">
              <ExternalLink className="h-4 w-4" />
              View GitHub Projects
            </Button>
            <Button variant="outline" className="gap-2">
              Read Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
