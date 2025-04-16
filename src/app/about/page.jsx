export default function About() {
  return (
    <div className="bg-[#0f0f1a] min-h-screen px-6 md:px-16 py-12 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white border-b-2 border-gray-600 inline-block pb-2">
          About Us
        </h2>

        <p className="text-lg leading-8 mb-6">
          <span className="font-semibold text-yellow-400">The Legacy of Fencing in Rajasthan</span>
          <br />
          Fencing, a sport rooted in chivalry and tradition, has a long and distinguished history. Rajasthan,
          known for its valiant swordsmen, carries this legacy with pride, consistently achieving top honors at
          national and international levels.
        </p>

        <div className="space-y-5">
          <p>
            🥇 <span className="font-medium text-white">1981:</span> Rajasthan won its first Senior National Fencing Championship at <span className="italic">Lucknow (U.P.)</span>—marking the start of a glorious journey.
          </p>
          <p>
            🥈 <span className="font-medium text-white">1993:</span> At the Bhilwara Nationals – 1 Gold, 1 Silver & 2 Bronze – Rajasthan secured Runners-up in the General Championship.
          </p>
          <p>
            🥈 <span className="font-medium text-white">1994-95:</span> Won Silver at the <span className="italic">Pune National Olympic Games</span>.
          </p>
          <p>
            🥉 <span className="font-medium text-white">1995-96:</span> Bronze in Team Event at <span className="italic">Patna Nationals</span>.
          </p>
          <p>
            🥉 <span className="font-medium text-white">1998:</span> Claimed Bronze at <span className="italic">Guwahati Nationals</span>.
          </p>
          <p>
            🥉 <span className="font-medium text-white">1999:</span> In the 1st Sub-Junior Nationals at <span className="italic">Jaipur</span>, Rajasthan earned two individual Bronze medals – Girls’ & Boys’ categories.
          </p>
          <p>
            🥉 <span className="font-medium text-white">2001:</span> Bronze in Team Event at <span className="italic">Bangalore National Team Games</span>.
          </p>
        </div>

        <p className="mt-8 text-lg leading-8">
          Rajasthan’s fencing legacy is built on perseverance, excellence, and sportsmanship. With every year,
          it continues to inspire a new generation of fencers to uphold and expand this proud tradition on both
          national and international platforms.
        </p>
      </div>
    </div>
  );
}
