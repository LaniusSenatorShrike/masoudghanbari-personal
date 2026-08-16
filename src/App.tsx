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

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <Navigation
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
        scrollToSection={scrollToSection}
      />

      {/* Command Palette */}
      <CommandPalette
        scrollToSection={scrollToSection}
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
      />

      {/* Main Content */}
      <main>
        <section id="home" style={{ scrollMarginTop: '5rem' }}><Home /></section>
        <section id="projects" style={{ scrollMarginTop: '5rem' }}><Projects /></section>
        <section id="blog" style={{ scrollMarginTop: '5rem' }}><Blog /></section>
        <section id="cv" style={{ scrollMarginTop: '5rem' }}><CV /></section>
        <section id="youtube" style={{ scrollMarginTop: '5rem' }}><YouTube /></section>
        <section id="contact" style={{ scrollMarginTop: '5rem' }}><Contact /></section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            size="icon"
            onClick={scrollToTop}
            className="h-12 w-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-gray-900"
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
