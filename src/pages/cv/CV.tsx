import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Download, Award, Briefcase } from 'lucide-react';
import { cvContent as content } from './content';

export function CV() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="mb-4">{content.title}</h2>
            <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
          </div>
          <Button className="gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-6 w-6 text-[var(--color-accent)]" />
            <h3>Professional Experience</h3>
          </div>

          <div className="space-y-12">
            {content.experience.map((job) => (
              <div
                key={job.id}
                className="border-l-4 border-[var(--color-accent)] pl-8"
              >
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3 text-gray-400">
                    {job.period}
                  </Badge>
                  <h4 className="mb-1">{job.role}</h4>
                  <p className="text-[var(--color-accent)] mb-1">{job.company}</p>
                  <p className="text-sm text-gray-400">{job.location}</p>
                </div>

                <ul className="space-y-2 mb-6 text-gray-400">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--color-accent)] mt-1">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
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

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-6 w-6 text-[var(--color-accent)]" />
            <h3>Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {content.certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-gray-700 p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="mb-2">{cert.name}</h5>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                  <Badge variant="outline" className="text-gray-400">{cert.year}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
