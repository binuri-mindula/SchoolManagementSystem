import React from 'react';
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();


  return (
    <div>
      <section className="relative">
        
        <div className="bg-blue-900 text-white py-12 px-6 md:px-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-signature mb-4 md:mb-0">
              Akura
            </h1>
            <h2 className="text-2xl md:text-3xl">
              School Management System
            </h2>
          </div>
        </div>

        
        <div className="bg-blue-100 text-gray-800 py-20 px-6 md:px-12 h-screen relative">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Welcome to Akura
            </h3>
            <p className="text-lg md:text-xl">
              Streamline your school's operations with our comprehensive management system.
            </p>
            <button onClick={() => navigate("/students")} className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>

         
          <div className="relative mt-12">
            <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white shadow-lg">
              <img src="../assets/a.png" alt="Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-16 right-16 w-36 h-36 border-8 border-white shadow-lg">
              <img src="../assets/a.png" alt="Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 left-20 w-28 h-28 border-8 border-white shadow-lg">
              <img src="../assets/a.png" alt="Image 3" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-20 right-24 w-40 h-40 border-8 border-white shadow-lg">
              <img src="../assets/a.png" alt="Image 4" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-36 h-36 border-8 border-white shadow-lg">
              <img src="../assets/a.png" alt="Image 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
            <path
              d="M0,0 C600,120 600,0 1200,0 L1200,120 L0,120 Z"
              className="fill-blue-900"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
