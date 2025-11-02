import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  lightMode: boolean;
  toggleLightMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Blog', id: 'blog' },
  { name: 'CV', id: 'cv' },
  { name: 'YouTube', id: 'youtube' },
  { name: 'Blockchain', id: 'blockchain' },
  { name: 'Contact', id: 'contact' },
];

export function Navigation({ lightMode, toggleLightMode, currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
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
            <button
              onClick={() => onNavigate('home')}
              className="text-xl tracking-tight hover:text-[var(--color-accent)] transition-colors"
            >
              MG
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--color-accent)]'
                      : 'text-gray-400 hover:text-gray-100 light:hover:text-gray-900'
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
                  className={`block w-full text-left py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--color-accent)]'
                      : 'text-gray-400 hover:text-gray-100 light:hover:text-gray-900'
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
