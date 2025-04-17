"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${
        scrolled 
          ? "py-2 bg-black/95 backdrop-blur-sm shadow-lg" 
          : "py-4 bg-black"
      } text-white transition-all duration-300 fixed w-full z-50`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between flex-wrap">
        {/* Left Logo with hover effect */}
        <div className="flex-shrink-0 logo-animation">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative">
              <Image
                src="/rfac.jpeg"
                alt="RSFA Logo"
                width={80}
                height={80}
                className="rounded-full object-contain shadow-lg border-2 border-white transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Center Text with animation */}
        <div className="text-center flex-1 px-2 headline-animation">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Rajasthan State Fencing Association
          </h2>
          <div className="h-0.5 w-0 mx-auto bg-yellow-500 header-line"></div>
          <p className="text-sm mt-2 leading-relaxed text-gray-300">
            (Registered under the Society Act, Govt of Rajasthan)
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Affiliated with: Fencing Association of India, Rajasthan Olympic Association, Rajasthan State Sports Council
          </p>
        </div>

        {/* Right Logo with hover effect */}
        <div className="flex-shrink-0 logo-animation-delayed">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative">
              <Image
                src="/logo3.jpeg"
                alt="Fencing Logo"
                width={80}
                height={80}
                className="rounded-full object-contain shadow-lg border-2 border-white transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes expand {
          0% { width: 0; }
          100% { width: 80%; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        :global(.logo-animation) {
          animation: float 3s ease-in-out infinite;
        }
        
        :global(.logo-animation-delayed) {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        :global(.headline-animation) {
          animation: fadeIn 1s ease-out forwards;
        }
        
        :global(.header-line) {
          animation: expand 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </header>
  );
}