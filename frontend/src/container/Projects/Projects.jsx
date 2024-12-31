import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const ImageCard = ({ image, title, videoLink }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-4 left-4">
          <h3 className="text-white text-xl font-cairo font-semibold">{title}</h3>
        </div>
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-cairo rounded-tr-none rounded-br-none rounded-tl-lg rounded-bl-lg bottom-4 right-0 bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <span>View</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate(); // Initialize navigate
  const galleryData = [
    { id: 1, image: project1, title: "Vaasavi Brundavanam III", videoLink: "https://youtu.be/0gzqbjvd-uk?si=FDMw9BCjBpBIx6V3" },
    { id: 2, image: project2, title: "Plan Animation", videoLink: "https://youtu.be/o5KPpxjpGh4?si=k2lgqWcB-2dcxfYa" },
    { id: 3, image: project3, title: "Cinematic Tour", videoLink: "https://youtu.be/5CFbfArJ5_I?si=Kk2nNu3VmhVLc2bs" },
    { id: 4, image: project4, title: "HillCrest- Walkthrough Video", videoLink: "https://youtu.be/jQRL_veLIHI?si=AKSpW9nCNQUBEmnd" },
    { id: 5, image: project5, title: "TNR DVN", videoLink: "https://youtu.be/E8x7b6xX4MU?si=mXXPGrj4ssnrsKq1" },
    { id: 6, image: project6, title: "Jitu Professional Saloon", videoLink: "https://youtu.be/q1eiTE0Bip4?si=A35EZZpzVz5bIXkL" },
  ];

  return (
    <>
      <h1 className="projects-heading font-semibold font-cairo" id="projects">Our Projects</h1>
      
      
      <div className="project-container px-4 py-0">
      <div className="line-sr flex justify-center w-full pb-8">
        <div className="line-break h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true" role="separator"></div>
      </div>
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="lg:col-span-2 lg:row-span-2">
            <ImageCard {...galleryData[0]} />
          </div>
          {galleryData.slice(1).map((data) => (
            <div key={data.id}>
              <ImageCard {...data} />
            </div>
          ))}
        </div>
        <div className="allproject-div">
        <button
          onClick={() => navigate("/Projectpage")} // Navigate to ProjectsPage
          className="  rounded-lg font-cairo bg-primary-orange text-white h-10 w-44 hover:bg-orange-600"
        >
          All Projects
        </button>
      </div>
      </div>
  
    </>
  );
};

export default Projects;
