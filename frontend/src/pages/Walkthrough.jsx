import React from "react";
import './Walkthrough.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';

const Walkthrough = () => {
  const projects = [
    {
      id: 1,
      title: "HillCrest- Walkthrough Video ",
      videoId: "jQRL_veLIHI",

    },
    {
      id: 2,
      title: "Jitu Professional Saloon",
      videoId: "q1eiTE0Bip4",


    },
    {
      id: 3,
      title: "Model House Cinematic Tour",
      videoId: "5CFbfArJ5_I",


    },
    {
      id: 4,
      title: "VASAVI BRINDHAVANAM III",
      videoId: "0gzqbjvd-uk",


    },
    {
      id: 5,
      title: "JSMR Vaasavi Brindavanam",
      videoId: "pvs_uSNU5g8",


    },
    {
      id: 6,
      title: "TNR DVN",
      videoId: "E8x7b6xX4MU",

   
    }
  ];

  const ProjectItem = ({ project }) => (
    <div className="pro-base bg-white rounded-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="walk-card md:flex flex-col">
        <div className="">
    
            <iframe
              className="yt-frame w-full rounded-tr-lg rounded-tl-lg"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              frameborder="0"
              allowFullScreen
            />
     
        </div>
        <div className="walk-text">
          <h2 className="walk-title font-cairo text-gray-800 mb-3">{project.title}</h2>
        </div>
      </div>
    </div>
  );

  return (
    <>
   
    <div className="walk-container min-h-screen  bg-gray-100 py-12">
      <div className="mx-auto px-8 sm:px-16 md:px-24 max-w-[1920px]">
        <h1 className="pro-heading font-semibold font-cairo text-gray-800 ">Walkthroughs & Cinematics</h1>
        <div className="walk-grid rounded-lg">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Walkthrough;

