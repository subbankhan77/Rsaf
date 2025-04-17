"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [activeSection, setActiveSection] = useState('');
  
  // This effect will run once when the component mounts
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set up intersection observer for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          const id = entry.target.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    }, { threshold: 0.2 });

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up when component unmounts
      document.querySelectorAll('section[id]').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Timeline data
  const timelineEvents = [
    { year: "1975", title: "Foundation", description: "RSFA established by a small group of dedicated fencers" },
    { year: "1976", title: "First Tournament", description: "Inaugural RSFA tournament held" },
    { year: "1980s", title: "Period of Growth", description: "Membership increased tenfold with new clubs forming" },
    { year: "1990", title: "Headquarters", description: "Permanent headquarters and training center established" },
    { year: "1998", title: "National Event", description: "First national championship hosted by RSFA" },
    { year: "2000s", title: "Modernization", description: "Implementation of electronic scoring systems" },
    { year: "Present", title: "Continued Excellence", description: "Ongoing expansion of programs and facilities" }
  ];

  // Achievements data
  const achievements = [
    { number: "15", text: "National champions across different weapons and age categories" },
    { number: "8", text: "Fencers contributed to international teams representing the country" },
    { number: "5", text: "National championships hosted, along with countless regional tournaments" },
    { number: "1st", text: "Comprehensive youth training program in the country" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Parallax Effect */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/fencing-background.jpg" 
            alt="Fencing background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 py-20 md:py-32 container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                RSFA History
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-transparent mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              The Royal State Fencing Association has a rich and storied history dating back decades,
              evolving from humble beginnings to become one of the most respected fencing organizations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-4">
          {['foundation', 'growth', 'recognition', 'modern', 'achievements', 'future'].map((section) => (
            <a 
              key={section} 
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-yellow-500 w-4 h-4' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Section */}
          <div className="relative mb-20">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 opacity-0 transition-opacity duration-700 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:w-1/2 flex md:justify-end px-4">
                  <div className={`content p-6 rounded-lg shadow-lg max-w-sm ${
                    index % 2 === 0 ? 'md:mr-8 bg-white' : 'md:ml-8 bg-white'
                  }`}>
                    <span className="block text-yellow-600 text-xl font-bold mb-2">{event.year}</span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 border-4 border-white shadow"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Main Content Sections */}
          <section id="foundation" className="mb-20 opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Foundation and Early Years
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </h2>
            <div className="prose max-w-none">
              <div className="md:flex gap-6 items-center">
                <div className="md:w-2/3">
                  <p className="mb-4 text-lg text-gray-700">
                    The RSFA was established in 1975 by a small group of dedicated fencers who saw the need for a formal organization to support and develop the sport. Initially operating out of a single facility with just a handful of members, the early years were characterized by passionate volunteers and limited resources.
                  </p>
                  <p className="mb-4 text-lg text-gray-700">
                    The first RSFA tournament was held in 1976, attracting participants from neighboring states and laying the groundwork for what would become an annual tradition.
                  </p>
                </div>
                <div className="md:w-1/3 relative h-60 md:h-auto my-6 md:my-0 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/vintage-fencing.jpg" 
                    alt="Early fencing tournaments" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          
          <section id="growth" className="mb-20 opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Growth and Expansion
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h2>
            <div className="prose max-w-none">
              <p className="mb-6 text-lg text-gray-700">
                Throughout the 1980s, the RSFA experienced significant growth. Membership increased tenfold, and new fencing clubs affiliated with the association began to appear across the state. This period also saw the introduction of structured training programs and the certification of coaches according to national standards.
              </p>
              <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg border-l-4 border-blue-500 my-8 shadow-md">
                <p className="italic text-xl text-gray-700 leading-relaxed">
                  "By 1990, the RSFA had established its permanent headquarters and training center, equipped with state-of-the-art facilities that could host regional and national competitions."
                </p>
              </div>
            </div>
          </section>
          
          <section id="recognition" className="mb-20 opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              National Recognition
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
            </h2>
            <div className="prose max-w-none">
              <div className="md:flex gap-6 items-center">
                <div className="md:w-1/3 relative h-60 md:h-auto my-6 md:my-0 rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                  <Image 
                    src="/fencing-competition.jpg" 
                    alt="National fencing competition" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4 text-lg text-gray-700">
                    The 1990s marked a period of increased national recognition for the RSFA. Members began to represent the state in national competitions with increasing success, and several RSFA fencers were selected for national teams.
                  </p>
                  <p className="mb-4 text-lg text-gray-700">
                    In 1998, the RSFA hosted its first national championship event, cementing its reputation as a premier fencing organization. This decade also saw the implementation of youth development programs that would later produce many champion fencers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="modern" className="mb-20 opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Modern Era
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4 text-lg text-gray-700">
                Since 2000, the RSFA has continued to evolve and adapt to changes in the sport. The association has embraced technological advances, including electronic scoring systems and online registration for competitions.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                The association now offers programs for fencers of all ages and abilities, from beginners to elite competitors. The RSFA's coaching certification program is recognized nationally, and its training methodologies have been adopted by other organizations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-2 border-purple-500 hover:shadow-lg transition duration-300">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Technology</h3>
                  <p className="text-gray-600">Electronic scoring systems and digital competition management</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-2 border-purple-500 hover:shadow-lg transition duration-300">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Training</h3>
                  <p className="text-gray-600">Modern coaching methodologies and advanced training programs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-2 border-purple-500 hover:shadow-lg transition duration-300">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Outreach</h3>
                  <p className="text-gray-600">Community programs bringing fencing to new participants</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="achievements" className="mb-20 opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Notable Achievements
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                  <div className="p-8">
                    <div className="text-5xl font-bold text-yellow-500 mb-4">{achievement.number}</div>
                    <div className="text-gray-700 text-lg">{achievement.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section id="future" className="opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
              Looking Forward
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-10 rounded-xl shadow-lg">
              <div className="prose max-w-none">
                <p className="mb-6 text-lg text-gray-700">
                  Today, the RSFA continues its mission to promote excellence in fencing. The association is focused on expanding access to the sport through community outreach programs, developing inclusive practices, and continuing to elevate the standard of fencing in the region.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-blue-500"></div>
                  <p className="text-xl font-medium text-blue-800">
                    With a strong foundation built over decades of dedication and hard work, the RSFA looks forward to writing the next chapter in its illustrious history.
                  </p>
                </div>
                <p className="text-lg text-gray-700">
                  The future vision includes international training centers, expanded youth programs, and hosting world-class competitions that bring the global fencing community to Rajasthan.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx global>{`
        .fade-in-section {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        section {
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        @keyframes timelineEntry {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .timeline-entry {
          animation: timelineEntry 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}