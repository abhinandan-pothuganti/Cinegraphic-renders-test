import React from "react";
import gallery1 from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/gallery 1.jpeg";
import './unreal.css';
import Footer from 'C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/container/Footer/Footer.jsx';
const Unreal = () => {
  return (
    <>
    
    <div className="coursecon min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ">
   
      <h1 className="course-heading  font-semibold font-cairo text-center mb-2">Unreal Kickstart:</h1>
      <div className="bg-gray-300 h-0.5 w-100vw"></div>
      <h1 className="course-sub font-light font-cairo text-center mb-4 mt-2">Learn level Design and how to design a game from scratch using UE5</h1>
      
 

        <div className="grid grid-cols-1 place-items-center mb-3 w-full">
            <img className="course-img rounded-xl" src={gallery1} alt="Unreal Course Photo" />

            <div className="course-price flex flex-row justify-between px-4 mt-2 rounded-2xl bg-gray-200 bg-opacity-50">
            <p className="price-only mt-4 font-cairo ">
                <span className="font-bold">Price:</span> ₹250
            </p>
            <a href="https://rzp.io/rzp/fQ3sjrm" target="_blank" rel="noopener noreferrer">
                <button className="mt-3 mb-3 h-10 bg-primary-orange text-white font-cairo rounded-lg px-6 py-2 hover:bg-orange-600">
                    Enroll Now
                </button>
             </a>

            </div>    
        </div>
          

      <div className="max-w-4xl  mx-auto text-gray-800">
        <p className="course-description text-xl font-cairo mb-10">
          Welcome to the Unreal Kickstart workshop! This course is designed to help you get started with Unreal Engine 5, the industry-leading 3D game design software. By the end of this course, you'll be equipped with the foundational skills needed to create immersive games and applications.
        </p>
        <h2 className="text-2xl px-5 font-semibold font-cairo  mb-4">What you'll learn:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Basics of Unreal Engine</li>
          <li>User interface</li>
          <li>Basics of level designing</li>       
        </ul>
     

        <h2 className="text-2xl px-5 font-semibold font-cairo mt-4 mb-4">Course Details:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Date:  21st December,2024</li>
          <li>Time:  3PM - 5PM</li>
          <li>Mode: Online</li>       
        </ul>
      
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Unreal;
