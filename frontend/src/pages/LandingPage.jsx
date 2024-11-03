import React from 'react';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/01.jpg'; 

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div>
            <section className="relative">
                <div className="bg-blue-900 text-white py-6 px-6 md:px-12">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        <h1 className="text-4xl md:text-5xl font-signature mb-4 md:mb-0">
                            Akura
                        </h1>
                        <h2 className="text-2xl md:text-3xl">
                            School Management System
                        </h2>
                    </div>
                </div>

                <div className="relative bg-blue-100 text-gray-800 py-20 px-6 md:px-12 h-screen" 
                     style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    
                    {/* Content on top of the overlay */}
                    <div className="relative container mx-auto text-center z-10">
                        <h3 className="text-3xl md:text-8xl font-semibold mb-4 text-white">
                            Welcome to Akura
                        </h3>
                        <p className="text-lg md:text-3xl text-white">
                            Streamline your school's operations with our comprehensive management system.
                        </p>
                        <button onClick={() => navigate("/students")} className="mt-10 px-12 py-6 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
                            Get Started
                        </button>
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
