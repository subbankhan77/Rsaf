'use client';
import Header from "./components/header/HeaderPage";
import Footer from "./components/footer/page";
import Image from "next/image";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

  return (
    <>
      <Header />
      
      {/* Main Content with top margin for fixed header */}
      <main className="bg-gradient-to-r from-gray-50 via-white to-gray-50 min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black text-white py-16 md:py-24">
          <div className="absolute inset-0 opacity-30 bg-[url('/fencing-bg.jpg')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Rajasthan State Fencing Association</h1>
                <p className="text-lg mb-8 text-gray-200">Promoting excellence in fencing through training, competition, and community development.</p>
                <div className="flex space-x-4">
                  <Link href="/about" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 font-semibold">
                    Learn More
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300 font-semibold">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="md:w-2/5">
                <div className="bg-white p-2 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition duration-500">
                  <Image 
                    src="/dumm1.jpeg" 
                    alt="Fencing in action" 
                    width={800} 
                    height={600} 
                    className="rounded-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Announcement Section */}
        <section className="py-10 bg-gradient-to-r from-red-50 to-red-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Upcoming Tournament</h2>
              <p className="text-gray-600 mb-4">Join us for the Rajasthan State Fencing Championship on May 15-16, 2025. Registration now open!</p>
              <Link href="/events" className="inline-flex items-center text-red-600 font-semibold hover:text-red-800">
                Register Now <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-16 container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">OUR MENTORS</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">The visionary leaders who guide our organization with their experience and expertise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Daud Khan */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src="/Daudkhan.jpeg" 
                    alt="Daud Khan" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">DAUD KHAN</h4>
                <p className="text-red-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">Rajasthan State Fencing Association. Founder member FAI and Former Treasurer, Ex.Sr. V.P FAI.</p>
              </div>
            </div>

            {/* Abdul Jabbar Khan */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src="/abdul.jpeg" 
                    alt="Abdul Jabbar Khan" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">ABDUL JABBAR KHAN</h4>
                <p className="text-red-600 font-medium mb-3">National & International Fencer</p>
                <p className="text-gray-600 text-sm">Former Treasurer RSFA with extensive experience in international competitions.</p>
              </div>
            </div>

            {/* Masood Khan Suri */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src="/masood.jpeg" 
                    alt="Masood Khan Suri" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">MASOOD KHAN SURI</h4>
                <p className="text-red-600 font-medium mb-3">Technical Committee Chairman</p>
                <p className="text-gray-600 text-sm">Ex.Treasurer, Former National & International Player with technical expertise in fencing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Bearers Section */}
        <section className="py-16 bg-gray-50 animate-on-scroll">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">OFFICE BEARERS</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">The dedicated team leading the Rajasthan State Fencing Association forward.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Treasurer */}
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                    <Image 
                      src="/bk.jpeg" 
                      alt="Treasurer" 
                      width={200} 
                      height={200} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">N. BABAR</h4>
                  <p className="text-blue-600 font-medium mb-3">TREASURER</p>
                  <p className="text-gray-600 text-sm text-center">Managing the financial affairs of the association with dedication and transparency.</p>
                </div>
              </div>

              {/* Vishnu Sharma */}
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                    <Image 
                      src="/vsnu.jpeg" 
                      alt="Vishnu Sharma" 
                      width={200} 
                      height={200} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">MR. VISHNU SHARMA</h4>
                  <p className="text-blue-600 font-medium mb-3">HON. SECRETARY</p>
                  <p className="text-gray-600 text-sm text-center">Overseeing the day-to-day operations and administrative functions of the association.</p>
                </div>
              </div>

              {/* Gauhar Suri */}
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
                    <Image 
                      src="/gore.jpeg" 
                      alt="GAUHAR F.K. SURI" 
                      width={200} 
                      height={200} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">GAUHAR F.K. SURI</h4>
                  <p className="text-blue-600 font-medium mb-3">PRESIDENT</p>
                  <p className="text-gray-600 text-sm text-center">Leading the association with vision and commitment to excellence in fencing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">OUR PROGRAMS</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Comprehensive training programs for fencers of all ages and skill levels.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg mb-2">Beginner Classes</h3>
              <p className="text-gray-600 text-sm">Introduction to fencing fundamentals for new enthusiasts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg mb-2">Advanced Training</h3>
              <p className="text-gray-600 text-sm">Specialized coaching for competitive fencers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg mb-2">Youth Development</h3>
              <p className="text-gray-600 text-sm">Nurturing young talent for future championships.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg mb-2">Referee Training</h3>
              <p className="text-gray-600 text-sm">Certification programs for fencing officials.</p>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

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
    </>
  );
}