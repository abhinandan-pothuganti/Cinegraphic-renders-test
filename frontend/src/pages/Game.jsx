import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import game1a from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/bubblefish1.jpeg";
import game2a from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/bubblefish2.jpeg";
import game3a from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/bubblefish3.jpeg";
import game1b from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/volcano1.jpeg";
import game2b from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/volcano2.jpeg";
import game3b from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/game/volcano3.jpeg";
import './Game.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';

const Game = () => {
  const images1 = [
    { url: game1a, title: "Bubble Fish" },
    { url: game2a, title: "Bubble Fish" },
    { url: game3a, title: "Bubble Fish" },
  ];

  const images2 = [
    { url: game1b, title: "Volcano Run" },
    { url: game2b, title: "Volcano Run" },
    { url: game3b, title: "Volcano Run" },
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextSlide = useCallback(
    (indexSetter, length) => {
      indexSetter((prevIndex) => (prevIndex + 1) % length);
    },
    []
  );

  useEffect(() => {
    const interval1 = setInterval(
      () => nextSlide(setCurrentIndex1, images1.length),
      3000
    );
    const interval2 = setInterval(
      () => nextSlide(setCurrentIndex2, images2.length),
      3000
    );

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [nextSlide, images1.length, images2.length]);

  const renderCarousel = (images, currentIndex, setCurrentIndex) => {
    const isVolcanoRun = images === images2; // Check if the images are for Volcano Run
    const prevSlide = () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    const nextManualSlide = () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    return (
      <div className="relative max-w-3xl mt-2 mx-0">
        <div
          className="game-img relative overflow-hidden rounded-lg"
          role="region"
          aria-label="Image carousel"
        >
          <div
            className="absolute w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{ left: `${index * 100}%` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-full object-${
                    isVolcanoRun ? "fill" : "cover"
                  }`}
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1682687220566-5599dbbebf11";
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row justify-center gap-2"
            role="tablist"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
   
    <div className="game-base mt-32">
      <h1 className="game-heading mb-2 font-semibold font-cairo text-black">
        Game Development
      </h1>
      <div className="bg-gray-200 h-0.5 w-100vw"></div>
      <h1 className="game-subheading font-cairo font-medium mt-8 mb-3">
        Upcoming Games
      </h1>
      <div className="game-grid ">
        {renderCarousel(images1, currentIndex1, setCurrentIndex1)}
        <div>
          <h1 className="text-3xl font-cairo font-bold mt-4 mb-4">
            Bubble Fish
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            maiores quod in illo aut iste eveniet velit mollitia? Temporibus
            dolor voluptate ex nam? Voluptate voluptatibus expedita voluptatem,
            placeat numquam non distinctio omnis facere mollitia magnam, id
            itaque rem laudantium aut quod. Quidem rem dicta praesentium maiores
            obcaecati exercitationem earum vitae ab officiis. Veritatis facere
            exercitationem nobis dolores ipsum voluptatum ducimus.
          </p>
        </div>
      </div>
      <div className="game-grid mt-10">
        {renderCarousel(images2, currentIndex2, setCurrentIndex2)}
        <div>
          <h1 className="text-3xl font-cairo font-bold mt-4 mb-4">Volcano Run</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            architecto unde voluptas quis ut porro cumque odit numquam alias
            eveniet, vero sunt aperiam voluptatum voluptates quibusdam quos
            voluptatibus reiciendis vel magnam corrupti, fugit magni
            necessitatibus? Quisquam ea vero, illum earum quos hic odit. Illum,
            veniam aliquid. Illo, autem doloremque! Aspernatur ipsum
            perspiciatis illum suscipit culpa nesciunt vero libero beatae odio
            enim autem veniam sed deleniti eius, tenetur aliquam eum sint.
          </p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Game;
