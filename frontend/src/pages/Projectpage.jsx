import React from "react";
import './Projectpage.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "VASAVI BRINDHAVANAM III ",
      description: "Step into the enchanting world of Vasavi Brindavanam-iii through this captivating walk-through video, where nature's serenity and architectural beauty merge seamlessly. As you meander through the meticulously landscaped gardens and pathways, a sense of tranquility envelops you. The grand entrance, adorned with intricate details, sets the tone for the stunning surroundings. The wide, well-maintained roads guide you to discover the luxurious amenities, including a lavish clubhouse, fitness center, swimming pool, and recreational spaces. Vasavi Brindavanam-iii is a true haven, where every step unveils a paradise of beauty and elegance.",
      videoId: "0gzqbjvd-uk",

    },
    {
      id: 2,
      title: "Jitu Professional Saloon",
      description: "Step into opulence with our Jitu Salon walkthrough! Experience Unreal Engine 5.1's magic as you explore every lavish detail - from exquisite lighting to intricate textures. Day to night, immerse in luxury. ",
      videoId: "q1eiTE0Bip4",


    },
    {
      id: 3,
      title: "TNR DVN",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      videoId: "E8x7b6xX4MU",


    },
    {
      id: 4,
      title: "HillCrest- Walkthrough Video",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      videoId: "jQRL_veLIHI",


    },
    {
      id: 5,
      title: "JSMR Vaasavi Brindavanam",
      description: "Step into the enchanting world of Vasavi Brindavanam-iii through this captivating walk-through video, where nature's serenity and architectural beauty merge seamlessly. As you meander through the meticulously landscaped gardens and pathways, a sense of tranquility envelops you. The grand entrance, adorned with intricate details, sets the tone for the stunning surroundings. The wide, well-maintained roads guide you to discover the luxurious amenities, including a lavish clubhouse, fitness center, swimming pool, and recreational spaces. Vasavi Brindavanam-iii is a true haven, where every step unveils a paradise of beauty and elegance.",
      videoId: "pvs_uSNU5g8",


    },
    {
      id: 6,
      title: "Plan Animation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      videoId: "o5KPpxjpGh4",

   
    }
  ];

  const ProjectItem = ({ project }) => (
    <div className="pro-base bg-white rounded-lg transition-transform duration-300 hover:scale-[1.02] ">
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
        <div className="pro-text">
          <h2 className="protitle font-cairo text-gray-800 ">{project.title}</h2>
          
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="pro-container min-h-screen  bg-gray-100 py-12">
      <div className=" max-w-[1920px]">
        <h1 className="pro-heading font-semibold font-cairo text-gray-800">Our Projects</h1>
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

export default ProjectsPage;

