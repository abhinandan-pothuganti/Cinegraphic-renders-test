import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Courses.css";
import gallery1 from "../../assets/gallery 1.jpeg";

const Courses = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div
      className="courses w-full bg-gray-100"
      id="courses"
    >
      <div>
        <h1 className="courses-heading font-semibold font-cairo text-black text-center gap-4">
          Workshops
        </h1>
        <div className="flex justify-center  pb-12">
        <div className="line-break h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true" role="separator"></div>
      </div>
      </div>

      <div className="course-container ">
        <div className="course-image ">
          <img src={gallery1} alt="unreal course" className="rounded-lg" />
        </div>
        <div className="course-details">
          <h1 className="course-name font-cairo font-medium">Unreal Kickstart:</h1>
          <h2 className="course-subhead font-cairo text-size-2xl">
            Begin your Unreal journey
          </h2>
          <p className="course-para font-cairo text-size-xl ">
            Get started with the world's most exciting realtime tool. UE5 is the
            industry-leading 3D game design software that professionals use to create
            today’s top games. Start your journey toward getting paid to make video
            games today!
          </p>
          <p className="font-cairo text-size-2xl">PRICE: ₹250</p>
          <button
            onClick={() => navigate("/unreal")} // Navigate to the Unreal page
            className="bg-primary-orange font-cairo rounded-lg hover:bg-orange-600 text-white w-24 h-10 mt-4"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
