import { Badge } from '../../components/ui/badge';
import { Play, Clock, Eye } from 'lucide-react';
import { youtubeContent as content } from './content';

export function YouTube() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.videos.map((video) => (
            <article
              key={video.id}
              className="border border-gray-700 overflow-hidden hover:border-[var(--color-accent)] transition-colors cursor-pointer group"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-700">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
                  <div className="bg-[var(--color-accent)] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-xs text-white">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <Badge variant="secondary" className="mb-3 text-gray-400">
                  {video.category}
                </Badge>
                <h4 className="mb-3">{video.title}</h4>
                <p className="text-gray-400 mb-4 text-sm">{video.description}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Eye className="h-4 w-4" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={content.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white transition-colors"
          >
            <Play className="h-5 w-5" />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
