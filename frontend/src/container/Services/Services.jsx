import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import walkthrough from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/walkthrough.jpg";
import interior from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/interior.jpg";
import creative from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/creative.jpg";
import graphic from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/graphic.jpg";
import game from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/game.jpg";
import motion from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/motion.jpg";
import digital from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/digital.jpg";
import "./Services.css";

const dummyProducts = [
  { id: 1, title: "Digital Marketing", image: digital, link: "/digital-marketing" },
  { id: 2, title: "Graphic Design", image: graphic, link: "/graphic-design" },
  { id: 3, title: "Motion Graphics", image: motion, link: "/motion-graphics" },
  { id: 4, title: "Game Development", image: game, link: "/game-development" },
  { id: 5, title: "Walkthrough & Cinematics", image: walkthrough, link: "/walkthroughs" },
  { id: 6, title: "Interior Design", image: interior, link: "/interiors" },
  { id: 7, title: "Creative Visualization", image: creative, link: "/creative" },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (product.link) {
      navigate(product.link); // Navigate to the respective page
    }
  };

  return (
    <div
      className="service-base flex-shrink-0 w-96 bg-transparent rounded-lg overflow-visible transform transition-all duration-300 hover:scale-105 mx-2 cursor-pointer"
      id="services"
      onClick={handleCardClick}
    >
      <div className="service-img-base relative rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1590212151175-e58edd96185b";
          }}
        />
        <div className="service-img absolute rounded-lg inset-0 bg-black bg-opacity-30">
          <h3 className="title font-semibold text-white font-cairo">{product.title}</h3>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const [products, setProducts] = useState(dummyProducts);

  useEffect(() => {
    const container = containerRef.current;

    const shouldScroll = () => window.innerWidth > 768;

    let scrollInterval;

    const startScrolling = () => {
      if (shouldScroll()) {
        // Duplicate products for seamless scrolling
        setProducts((prevProducts) => [...prevProducts, ...prevProducts]);

        const CARD_WIDTH = 384; // Width of each card including margin
        const CARDS_TO_SCROLL = 3; // Number of cards to scroll at a time
        const SCROLL_AMOUNT = CARD_WIDTH * CARDS_TO_SCROLL;

        const scroll = () => {
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // Reset to start seamlessly
          } else {
            container.scrollBy({
              left: SCROLL_AMOUNT,
              behavior: "smooth",
            });
          }
        };

        scrollInterval = setInterval(scroll, 3000); // Scroll every 3 seconds
      }
    };

    startScrolling();

    // Stop scrolling for smaller screens
    const resizeListener = () => {
      if (!shouldScroll() && scrollInterval) {
        clearInterval(scrollInterval);
        setProducts(dummyProducts); // Reset to original products for smaller screens
        container.scrollLeft = 0; // Reset scroll position for smaller screens
      } else if (shouldScroll() && !scrollInterval) {
        startScrolling();
      }
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      if (scrollInterval) clearInterval(scrollInterval); // Cleanup
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="service-container relative overflow-hidden bg-white py-8 mt-4">
      <h2 className="services-heading font-semibold text-center text-primary-black font-cairo">Our Services</h2>
      <div className="line-sr flex justify-center w-full pb-2">
        <div className="line-break h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true" role="separator"></div>
      </div>
      <div
        className="slider"
        ref={containerRef}
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="flex">
          {products.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
