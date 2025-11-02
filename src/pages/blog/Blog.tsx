import { Badge } from '../../components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogContent as content } from './content';

export function Blog() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {content.categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 text-gray-400 cursor-pointer hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="mb-8">Featured</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.posts
              .filter((post) => post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                >
                  <Badge variant="secondary" className="mb-4 text-gray-400">
                    {post.category}
                  </Badge>
                  <h4 className="mb-3">{post.title}</h4>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="mb-8">Recent</h3>
          <div className="space-y-4">
            {content.posts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="secondary" className="text-gray-400">{post.category}</Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h4 className="mb-2">{post.title}</h4>
                      <p className="text-gray-400">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm shrink-0">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
