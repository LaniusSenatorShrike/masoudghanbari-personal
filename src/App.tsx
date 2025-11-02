import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';

// Page imports
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { Blog } from './pages/blog/Blog';
import { CV } from './pages/cv/CV';
import { YouTube } from './pages/youtube/YouTube';
import { Contact } from './pages/contact/Contact';

type Page = 'home' | 'projects' | 'blog' | 'cv' | 'youtube' | 'contact';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Initialize theme - dark mode by default
    if (lightMode) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [lightMode]);

  useEffect(() => {
    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'cv':
        return <CV />;
      case 'youtube':
        return <YouTube />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <Navigation
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Command Palette */}
      <CommandPalette
        onNavigate={handleNavigate}
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
      />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            size="icon"
            onClick={scrollToTop}
            className="h-12 w-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
