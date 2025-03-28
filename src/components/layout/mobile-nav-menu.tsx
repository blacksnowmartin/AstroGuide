import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ZODIAC_SIGNS, SIDE_MENU_LINKS } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MobileNavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 md:hidden rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Zodiac Signs</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ZODIAC_SIGNS.map((sign) => (
          <DropdownMenuItem key={sign.name} asChild>
            <Link href={`/${sign.name.toLowerCase()}`}>
              {sign.name}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {SIDE_MENU_LINKS.map((link) => (
          <DropdownMenuItem key={link.path} asChild>
            <Link href={link.path}>
              {link.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
