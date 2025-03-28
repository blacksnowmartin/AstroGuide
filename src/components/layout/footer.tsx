import Link from 'next/link';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return <Facebook size={18} />;
      case 'Twitter':
        return <Twitter size={18} />;
      case 'Instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-grid">
          <div className="footer-links">
            {FOOTER_LINKS.group1.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:underline text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            {FOOTER_LINKS.group2.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:underline text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            {FOOTER_LINKS.group3.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:underline text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              Copyright {currentYear} - {currentYear + 1} | The Horoscope.co |
              <Link href="/terms" className="hover:underline ml-1">
                Terms and Conditions of Use
              </Link> |
              <Link href="/privacy-policy" className="hover:underline ml-1">
                Privacy Policy
              </Link>
            </p>

            <div className="social-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
