'use client';
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between flex-wrap">
        
        {/* Left Logo */}
        <div className="flex-shrink-0 animate-float">
          <Image
            src="/rfac.jpeg"
            alt="Left Logo"
            width={80}
            height={80}
            className="rounded-full object-contain shadow-lg"
          />
        </div>

        {/* Center Text */}
        <div className="text-center flex-1 px-2">
          <h2 className="text-xl md:text-2xl font-bold">Rajasthan State Fencing Association</h2>
          <p className="text-sm mt-1 leading-relaxed text-gray-300">
            (Registered under the Society Act, Govt of Rajasthan)<br />
            Affiliated with: Fencing Association of India, Rajasthan Olympic Association, Rajasthan State Sports Council
          </p>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 animate-float delay-200">
          <Image
            src="/rfac2.jpeg"
            alt="Right Logo"
            width={80}
            height={80}
            className="rounded-full object-contain shadow-lg"
          />
        </div>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
