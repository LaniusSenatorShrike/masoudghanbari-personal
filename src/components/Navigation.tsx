import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  lightMode: boolean;
  toggleLightMode: () => void;
  scrollToSection: (id: string) => void;
}

const navItems = [
  { name: 'Intro', id: 'intro' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Connect', id: 'connect' },
];

export function Navigation({ lightMode, toggleLightMode, scrollToSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;
      let current = 'intro';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-gray-900 light:bg-gray-100 border-b border-gray-800 light:border-gray-300'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-mono uppercase transition-colors ${
                    activeSection === item.id
                      ? 'text-[var(--color-accent)]'
                      : 'text-gray-300 hover:text-gray-100 light:hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLightMode}
                className="ml-4"
              >
                {lightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleLightMode}>
                {lightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 light:bg-gray-100 border-t border-gray-800 light:border-gray-300">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 font-mono uppercase transition-colors ${
                    activeSection === item.id
                      ? 'text-[var(--color-accent)]'
                      : 'text-gray-300 hover:text-gray-100 light:hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
