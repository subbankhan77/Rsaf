'use client';
import Header from "./components/header/HeaderPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
      <Header />

      {/* Mentors Section */}
      <section className="py-10 container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-semibold text-center mb-6">OUR MENTORS</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Daud Khan */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/Daudkhan.jpeg" alt="Daud Khan" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">DAUD KHAN</h4>
              <p className="text-gray-600">Chief Executive officer</p>
              <p className="text-gray-600">Rajasthan State Fencing Association. Founder member FAI and Former Treasurer, Ex.Sr. V.P FAI.</p>
            </div>
          </div>

          {/* Abdul Jabbar Khan */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/abdul.jpeg" alt="Abdul Jabbar Khan" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">ABDUL JABBAR KHAN</h4>
              <p className="text-gray-600">National & International Fencer</p>
              <p className="text-gray-600">Former Treasurer RSFA</p>
            </div>
          </div>

          {/* Masood Khan Suri */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/masood.jpeg" alt="Masood Khan Suri" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">MASOOD KHAN SURI</h4>
              <p className="text-gray-600">Ex.Treasurer Former National & International Player</p>
              <p className="text-gray-600">Chairman Technical Committee RSFA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Bearers Section */}
      <section className="py-10 container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-semibold text-center mb-6">OFFICE BEARERS</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Treasurer */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/Daudkhan.jpeg" alt="Treasurer" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">Treasurer</h4>
              <p className="text-gray-600">Treasurer</p>
              <p className="text-gray-600">Treasurer</p>
            </div>
          </div>

          {/* Vishnu Sharma */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/vsnu.jpeg" alt="Vishnu Sharma" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">Mr. VISHNU SHARMA</h4>
              <p className="text-gray-600">Hon. Secretary</p>
              <p className="text-gray-600">Rajasthan State Fencing Association</p>
            </div>
          </div>

          {/* Gauhar Suri */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
            <Image src="/gore.jpeg" alt="GAUHAR F.K. SURI" width={120} height={120} className="rounded-full object-cover" />
            <div>
              <h4 className="text-xl font-bold text-gray-800">GAUHAR F.K. SURI</h4>
              <p className="text-gray-600">President</p>
              <p className="text-gray-600">Rajasthan State Fencing Association</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
