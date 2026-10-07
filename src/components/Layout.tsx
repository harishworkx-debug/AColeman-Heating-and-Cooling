import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
