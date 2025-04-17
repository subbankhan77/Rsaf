"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#0e0e1a] to-black text-gray-300 pt-12 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Address Section with hover animation */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h4 className="text-white text-xl font-semibold mb-4 relative inline-block">
              Address
              <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-red-500"></span>
            </h4>
            <div className="mt-6 text-sm flex items-start gap-3 leading-relaxed">
              <MapPin className="w-5 h-5 mt-1 text-red-400 flex-shrink-0" />
              <div>
                <p className="text-gray-300">
                  Behind petrol pump sanganer airport,<br />
                  circle tonk road, Jaipur 302029<br />
                </p>
                <p className="text-gray-400 mt-2">Ph. 0141-2790445</p>
              </div>
            </div>
          </div>
          
          {/* Phone & Email with animated hover effects */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h4 className="text-white text-xl font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-green-500"></span>
            </h4>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">+91 99296 11574</span>
              </div>
              <div className="flex items-start gap-3 text-sm group">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <div>
                  <a 
                    href="mailto:dkhansuri@gmail.com" 
                    className="hover:text-white transition-colors block"
                  >
                    dkhansuri@gmail.com
                  </a>
                  <a 
                    href="mailto:rajasthan@fencigindia.org" 
                    className="hover:text-white transition-colors block mt-1"
                  >
                    rajasthan@fencigindia.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Links & Social Section */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h4 className="text-white text-xl font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-blue-500"></span>
            </h4>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link href="/privacy" className="text-sm flex items-center gap-2 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-transform group-hover:translate-x-1" />
                <span>Privacy & Refund Policy</span>
              </Link>
              <Link href="/terms" className="text-sm flex items-center gap-2 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-transform group-hover:translate-x-1" />
                <span>Terms & Conditions</span>
              </Link>
              <Link href="/fencing-history" className="text-sm flex items-center gap-2 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-transform group-hover:translate-x-1" />
                <span>Fencing History</span>
              </Link>
              <Link href="/rsfa-history" className="text-sm flex items-center gap-2 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-transform group-hover:translate-x-1" />
                <span>RSFA History</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        
        {/* Bottom Bar with animated gradient */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 mt-12 py-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <p>
            © {currentYear} Rajasthan State Fencing Association. All rights reserved.
          </p>
          <p className="mt-2">
            Developed by <span className="text-white font-medium">Subban Khan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}