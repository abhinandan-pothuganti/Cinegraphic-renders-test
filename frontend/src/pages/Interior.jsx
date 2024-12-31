import { useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
import interior1 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior1.jpg';
import interior2 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior2.jpg';
import interior3 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior3.jpg';
import interior4 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior4.jpg';
import interior5 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior5.jpg';
import interior6 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior6.jpg';
import interior7 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior7.jpg';
import interior8 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior8.jpg';
import interior9 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior9.jpg';
import interior10 from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/interior/interior10.jpg';
import './Interior.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';


const Interior = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Title",
      description: "Description",
      imageUrl: interior1,
      span: "col-span-3 row-span-2"
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      imageUrl: interior2,
      span: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      imageUrl: interior3,
      span: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Title",
      description: "Description",
      imageUrl: interior4,
      span: "col-span-1 row-span-2"
    },
    {
      id: 5,
      title: "Title",
      description: "Description",
      imageUrl: interior5,
      span: "col-span-2 row-span-2"
    },
    {
      id: 6,
      title: "Title",
      description: "Description",
      imageUrl: interior6,
      span: "col-span-1 row-span-1"
    },
    {
        id: 7,
        title: "Title",
        description: "Description",
        imageUrl: interior7,
        span: "col-span-4 row-span-3"
    },
    {
        id: 8,
        title: "Title",
        description: "Description",
        imageUrl: interior8,
        span: "col-span-2 row-span-2"
    },
    {
        id: 9,
        title: "Title",
        description: "Description",
        imageUrl: interior9,
        span: "col-span-2 row-span-1"
    },
    {
        id: 10,
        title: "Title",
        description: "Description",
        imageUrl: interior10,
        span: "col-span-2 row-span-1"
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <div className="interior-container ">
   <h1 className="interior-heading font-cairo font-medium ">Interior Design</h1>


    <div className="  py-8">
      <div className="interior-grid">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`${item.span} relative group overflow-hidden rounded-lg cursor-pointer`}
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="grid-img w-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1682686580186-b55d2a91053c";
                e.target.alt = "Fallback Image";
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <FiMaximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={handleCloseLightbox}
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1682686580186-b55d2a91053c";
                e.target.alt = "Fallback Image";
              }}
            />
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
      <Footer/>
    </>
    
  );
};

export default Interior;