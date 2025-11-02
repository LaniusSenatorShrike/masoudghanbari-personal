import { useEffect, useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  FileText,
  Youtube,
  Blocks,
  Mail,
  Download,
  Moon,
  Sun,
} from 'lucide-react';

interface CommandPaletteProps {
  onNavigate: (page: string) => void;
  lightMode: boolean;
  toggleLightMode: () => void;
}

export function CommandPalette({
  onNavigate,
  lightMode,
  toggleLightMode,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (action: string) => {
    if (action === 'theme') {
      toggleLightMode();
    } else if (action === 'cv-download') {
      // Download CV
      console.log('Downloading CV...');
    } else {
      onNavigate(action);
    }
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => handleSelect('home')}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('about')}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('projects')}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('blog')}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('cv')}>
            <FileText className="mr-2 h-4 w-4" />
            <span>CV</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('youtube')}>
            <Youtube className="mr-2 h-4 w-4" />
            <span>YouTube</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('blockchain')}>
            <Blocks className="mr-2 h-4 w-4" />
            <span>Blockchain</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('contact')}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => handleSelect('cv-download')}>
            <Download className="mr-2 h-4 w-4" />
            <span>Download CV</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('theme')}>
            {lightMode ? (
              <Moon className="mr-2 h-4 w-4" />
            ) : (
              <Sun className="mr-2 h-4 w-4" />
            )}
            <span>Toggle Theme</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
