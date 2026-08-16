import { experienceContent } from './content';

export function Experience() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono uppercase mb-4">EXPERIENCE</h2>
        <div className="w-20 h-1 bg-[var(--color-accent)] mb-16"></div>

        <div className="space-y-12">
          {experienceContent.jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors"
            >
              <h3 className="text-lg font-bold mb-1">
                {job.role} — {job.company}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {job.period}
                {job.location ? ` · ${job.location}` : ''}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="font-mono uppercase mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {experienceContent.certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-gray-700 p-4 hover:border-[var(--color-accent)] transition-colors"
              >
                <p className="font-semibold">{cert.name}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="font-mono uppercase mb-6">Education</h3>
          {experienceContent.education.map((edu, index) => (
            <div key={index} className="border border-gray-700 p-6">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
