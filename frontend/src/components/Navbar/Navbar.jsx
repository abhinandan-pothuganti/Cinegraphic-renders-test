import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll to add shadow to navbar
  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to home or scroll to top
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const section = document.querySelector('#home');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation
  const handleNavigation = (id) => {
    if (location.pathname === '/') {
      // Scroll to section on the homepage
      const section = document.querySelector(id);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height dynamically
        console.log('Section top position:', sectionTop);
        console.log('Navbar height:', navbarHeight);
  
        const adjustedPosition = sectionTop - navbarHeight - 100; // Adjust the scroll position
        console.log('Adjusted position:', adjustedPosition);
  
        window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage, then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height dynamically
          console.log('Section top position (post navigation):', sectionTop);
          console.log('Navbar height (post navigation):', navbarHeight);
  
          const adjustedPosition = sectionTop - navbarHeight;
          console.log('Adjusted position (post navigation):', adjustedPosition);
  
          window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };
  

  return (
    <nav className={`z-nav navbar bg-white ${isFixed ? 'shadow-md' : ''}`}>
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img
          src={images.cinegraphics}
          alt="app logo"
          className="logo"
          style={{ marginTop: 0 }}
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex justify-center items-center gap-20 mr-[1rem]">
        {['ABOUT US', 'PROJECTS'].map((item, index) => (
          <li
            key={index}
            className="text-black font-cairo hover:text-primary-orange cursor-pointer"
            onClick={() => handleNavigation(`#${item.toLowerCase().replace(/\s+/g, '')}`)}
          >
            {item}
          </li>
        ))}

        {/* Our Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)} // Open dropdown on hover
          onMouseLeave={() => setIsServicesOpen(false)} // Close dropdown on hover out
        >
          <span
            className="text-black font-cairo flex gap-2 cursor-pointer hover:text-primary-orange"
            onClick={() => handleNavigation('#services')} // Scroll to services section
          >
            OUR SERVICES
            <IoMdArrowDropdown className="mt-1" />
          </span>
          {isServicesOpen && (
            <ul className="absolute top-full left-0 w-48 font-cairo bg-white border shadow-md mt-2 p-2 rounded-md">
              {[
                { name: 'Digital Marketing', path: '' },
                { name: 'Graphic Design', path: '' },
                { name: 'Motion Graphics', path: '' },
                { name: 'Game Development', path: '' },
                { name: 'Walkthroughs and Cinematics', path: '/walkthroughs'},
                { name: 'Interior Design', path: '/interiors'},
                { name: 'Creative Visualization', path: '/creative'}
                // { name: 'Digital Marketing', path: '/services/digital-marketing' },
              ].map((service, index) => (
                <li
                  key={index}
                  className="text-primary-blue hover:text-primary-orange cursor-pointer py-1"
                  onClick={() => {
                    navigate(service.path); // Redirect to the respective service page
                  }}
                >
                  {service.name}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Contact Us */}
        <li
          className="text-black font-cairo hover:text-primary-orange cursor-pointer"
          onClick={() => handleNavigation('#contactus')}
        >
          CONTACT US
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="ham">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="toggle slide-bottom fixed top-0 left-0 h-screen bg-primary-black text-white flex flex-col items-center z-50">
            <ImCross
              className="absolute top-5 right-5 cursor-pointer"
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none mt-20 space-y-8">
              {['Home', 'About Us', 'Projects', 'Services',].map((item, index) => (
                <li
                  key={index}
                  className="text-2xl font-bold cursor-pointer hover:text-primary-orange"
                  onClick={() => {
                    handleNavigation(`#${item.toLowerCase().replace(/\s+/g, '')}`);
                    setToggleMenu(false);
                  }}
                >
                  {item}
                </li>
              ))}
              <li
                className="text-2xl font-bold cursor-pointer hover:text-primary-orange"
                onClick={() => {
                  handleNavigation('#contactus');
                  setToggleMenu(false);
                }}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
