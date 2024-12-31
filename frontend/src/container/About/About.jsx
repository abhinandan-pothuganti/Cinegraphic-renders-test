import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="aboutus w-full " id="aboutus">
      <div className="about-container mx-auto text-center  px-4 ">
        <h1 className="about-heading font-medium text-center font-cairo text-black">
          About Us
        </h1>
        <div className=" flex justify-center pb-2">
        <div className="line-break h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true" role="separator"></div>
      </div>
        <p className="about-text text-center font-cairo my-6 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi illo tempore nihil dolor modi perspiciatis laboriosam facere eum nam, reiciendis asperiores voluptatibus nulla, odit debitis. Neque, accusamus quisquam sed voluptas animi deserunt! Commodi ratione voluptatum incidunt, laboriosam adipisci ex in, quibusdam exercitationem est excepturi pariatur, magni eius. Quasi, ea?
        </p>
      </div>
    </div>
  );
};

export default About;
