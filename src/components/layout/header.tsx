import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { MobileNavMenu } from './mobile-nav-menu';

export function Header() {
  return (
    <header className="main-nav">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="header-logo">
          <Image
            src="/img/logo.png"
            alt="TheHoroscope.co"
            width={40}
            height={40}
          />
          <span className="hidden sm:inline-block">TheHoroscope.co</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
}
