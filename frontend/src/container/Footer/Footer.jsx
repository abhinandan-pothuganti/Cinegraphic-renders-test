import React, { useState, useEffect } from "react";
import images from '../../constants/images';
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    const offset = 80; // Adjust this value based on your header height
    const elementPosition = section?.offsetTop || 0;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="foot-base  bg-white text-black pb-8 px-2">
      <div className="foot-container">
         <div className="foot-contents">
              <div className="footer-logoimg">
                  <img
                    src={images.cinegraphicsfooter}
                    alt="Cinegraphic Renders Logo"
                    className="foot-img"
                  />
                </div>

            <div className="footer-matter">
                  {/* Quick Links */}
                <div className="links">
                <h3 className="text-xl font-cairo font-semibold mb-4">Quick Links</h3>
                <ul className="foot-texts space-y-2 ml-0">
                  {[
                    { name: "Home", id: "#home" },
                    { name: "Projects", id: "#projects" },
                    { name: "About Us", id: "#aboutus" },
                    { name: "Contact Us", id: "#contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <button
                        className="text-gray-600 font-cairo hover:text-primary-orange transition-colors duration-300"
                        aria-label={`Navigate to ${link.name} page`}
                        onClick={() => scrollToSection(link.id)}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

                   {/* Contact Info */}
                <div className="contactinfo">
                  <h3 className="text-xl font-semibold font-cairo mb-4">Contact Us</h3>
                  <div className="contactdet space-y-2">
                    <div className="flex flex-row items-center space-x-0">
                      
                      <span className="foot-texts text-gray-600 font-cairo ">+91 905929840</span>
                    </div>
                    <div className="flex flex-row items-center space-x-0">
                    
                      <span className="foot-texts text-gray-600 font-cairo">sales@cinegraphicrenders.in</span>
                    </div>
                    <div className="flex flex-row items-center space-x-0">
                      
                      <span className="foot-texts text-gray-600 font-cairo">L.B.Nagar, Hyderabad</span>
                    </div>
                  </div>
                </div>
            </div>
             
      
      </div>
          
       

        <div className="footest-border mt-6 pt-8 border-t border-gray-800">
          <div className="footest flex md:flex-row justify-center items-center">
            <div className="text-gray-400 text-sm font-cairo">
              © {new Date().getFullYear()} Cinegraphic Renders. All rights reserved.
            </div>
          
          </div>
        </div>
      </div>

      
      
    </footer>
  );
};

export default Footer;
