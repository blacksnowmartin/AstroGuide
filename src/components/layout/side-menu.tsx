import Link from 'next/link';
import Image from 'next/image';
import { SIDE_MENU_LINKS } from '@/lib/constants';

export function SideMenu() {
  return (
    <div className="space-y-8">
      <div className="side-menu">
        {SIDE_MENU_LINKS.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="side-menu-item"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="bg-[#fff5f0] border border-slate-200 rounded-md p-6 text-center">
        <h3 className="text-2xl mb-4 font-script">Denise</h3>
        <p className="text-sm uppercase font-bold mb-2">Like my site?</p>
        <p className="mb-4">
          Now you can support my astrology work.<br />
          Thank You!
        </p>
        <a
          href="#"
          className="bg-[#333035] text-white py-2 px-4 inline-block rounded-md hover:bg-[#4a474e] transition-colors"
        >
          Become a Patron
        </a>
      </div>
    </div>
  );
}
