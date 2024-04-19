

import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';

export function TemplateLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

