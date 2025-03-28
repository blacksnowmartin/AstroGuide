import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { SideMenu } from './side-menu';

interface SiteLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function SiteLayout({ children, showSidebar = true }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className={showSidebar ? 'lg:col-span-3' : 'lg:col-span-4'}>
              {children}
            </div>

            {showSidebar && (
              <div className="lg:col-span-1">
                <SideMenu />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
