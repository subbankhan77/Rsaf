"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";

export default function About() {
  // For animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const achievements = [
    {
      year: "1981",
      title: "First Senior National Championship",
      location: "Lucknow (U.P.)",
      description: "Rajasthan won its first Senior National Fencing Championship—marking the start of a glorious journey.",
      medal: "gold"
    },
    {
      year: "1993",
      title: "Bhilwara Nationals",
      location: "Bhilwara",
      description: "1 Gold, 1 Silver & 2 Bronze – Rajasthan secured Runners-up in the General Championship.",
      medal: "silver"
    },
    {
      year: "1994-95",
      title: "Pune National Olympic Games",
      location: "Pune",
      description: "Won Silver at the prestigious Pune National Olympic Games.",
      medal: "silver"
    },
    {
      year: "1995-96",
      title: "Patna Nationals",
      location: "Patna",
      description: "Bronze in Team Event at Patna Nationals.",
      medal: "bronze"
    },
    {
      year: "1998",
      title: "Guwahati Nationals",
      location: "Guwahati",
      description: "Claimed Bronze at Guwahati Nationals.",
      medal: "bronze"
    },
    {
      year: "1999",
      title: "1st Sub-Junior Nationals",
      location: "Jaipur",
      description: "Earned two individual Bronze medals – Girls' & Boys' categories.",
      medal: "bronze"
    },
    {
      year: "2001",
      title: "National Team Games",
      location: "Bangalore",
      description: "Bronze in Team Event at Bangalore National Team Games.",
      medal: "bronze"
    }
  ];

  const getMedalColor = (medal) => {
    switch(medal) {
      case "gold": return "from-yellow-300 to-yellow-500";
      case "silver": return "from-gray-300 to-gray-400";
      case "bronze": return "from-amber-600 to-amber-800";
      default: return "from-gray-300 to-gray-400";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0a0a20] to-[#1a1a3a] text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/fencing-pattern.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About RSFA</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The legacy of excellence in fencing across Rajasthan - developing champions and promoting the art of swordsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-[#0f0f1a] to-[#151530] text-gray-100 px-6 md:px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Legacy Section */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative inline-block">
              Our Legacy
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></span>
            </h2>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <p className="text-lg leading-8 mb-6">
                  <span className="font-semibold text-yellow-400 text-xl mb-2 block">The Legacy of Fencing in Rajasthan</span>
                  Fencing, a sport rooted in chivalry and tradition, has a long and distinguished history. Rajasthan, known for its valiant swordsmen, carries this legacy with pride, consistently achieving top honors at national and international levels.
                </p>
                <p className="text-lg leading-8">
                  Rajasthan's fencing legacy is built on perseverance, excellence, and sportsmanship. With every year, it continues to inspire a new generation of fencers to uphold and expand this proud tradition on both national and international platforms.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image 
                    src="/demmy.jpg" 
                    alt="Fencing Silhouette" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white relative inline-block">
              Our Achievements
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></span>
            </h2>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-[#1a1a3a] rounded-xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${getMedalColor(achievement.medal)} p-0.5 rounded-xl`}>
                    <div className="bg-[#1a1a3a] rounded-lg p-6">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">{achievement.year}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                          <p className="text-gray-400 text-sm italic mb-2">{achievement.location}</p>
                          <p className="text-gray-300">{achievement.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <Trophy className={`w-10 h-10 ${
                            achievement.medal === "gold" ? "text-yellow-400" : 
                            achievement.medal === "silver" ? "text-gray-300" : "text-amber-700"
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="mt-20 bg-[#12122a] p-8 rounded-2xl shadow-xl animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-lg leading-8">
              To become a center of excellence in fencing, nurturing talent from grassroots to international level, and to establish Rajasthan as a powerhouse in the world of fencing.
            </p>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}