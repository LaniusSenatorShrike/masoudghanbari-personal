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
  Briefcase,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';

interface CommandPaletteProps {
  scrollToSection: (id: string) => void;
  lightMode: boolean;
  toggleLightMode: () => void;
}

export function CommandPalette({
  scrollToSection,
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
    } else {
      scrollToSection(action);
    }
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => handleSelect('intro')}>
            <Home className="mr-2 h-4 w-4" />
            <span>Intro</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('experience')}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experience</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('projects')}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect('connect')}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Connect</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Actions">
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
