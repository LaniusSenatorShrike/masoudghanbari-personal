import { Download, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { homeContent as content } from './content';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-32">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="mb-6">
            <div className="inline-block mb-2 text-sm uppercase tracking-wider text-gray-400">
              {content.role}
            </div>
            <h1 className="mb-6">
              {content.name.split(' ')[0]}
              <br />
              {content.name.split(' ')[1]}
            </h1>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-6"></div>
          </div>

          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            {content.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate('projects')}
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white"
            >
              {content.buttons.primary}
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              {content.buttons.secondary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              {content.buttons.tertiary}
            </Button>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--color-accent)] opacity-10"></div>
            <div className="relative w-80 h-80 bg-gray-800 overflow-hidden">
              <ImageWithFallback
                src={content.profileImage}
                alt={content.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[var(--color-accent)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
