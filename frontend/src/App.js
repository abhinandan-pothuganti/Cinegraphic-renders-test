import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Projects,
  ContactUs,
  Footer,
  Courses,
  Header,
  About,
  Services,
  Brands,
} from './container';
import { Navbar } from './components';
import ProjectPage from './pages/Projectpage';
import Unreal from './pages/unreal';
import Walkthrough from './pages/Walkthrough';
import Creative from './pages/Creative';
import Game from './pages/Game';
import Interior from './pages/Interior';

import './App.css';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]); // Runs on every route change

  return null;
};

const App = () => {
  // Refs for sections
  const servicesRef = useRef(null);
  const headerRef = useRef(null);

  // Handle scroll to specific sections
  const handleScrollTo = (section) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      {/* ScrollToTop component listens for route changes */}
      <ScrollToTop />

      {/* Navbar with scroll handling */}
      <Navbar
        onServicesClick={() => handleScrollTo(servicesRef)}
        onHomeClick={() => handleScrollTo(headerRef)}
      />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* Sections with refs */}
              <div ref={headerRef}>
                <Header />
              </div>
              <About />
              <Projects />
              <Courses />
              <div ref={servicesRef}>
                <Services />
              </div>
              <Brands />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* Individual Project Pages */}
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/unreal" element={<Unreal />} />
        <Route path="/walkthroughs" element={<Walkthrough />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/game-development" element={<Game />} />
        <Route path="/interiors" element={<Interior />} />

        {/* Contact Us Page */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
