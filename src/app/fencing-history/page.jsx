"use client";

import React from 'react';

export default function Page() {  // Use "Page" as the component name for app/fencing-history/page.js
  console.log("Fencing History Page Rendered"); // Debugging log
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fencing History</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Fencing is one of the oldest sports in the world, with roots dating back to ancient Egypt around 1200 BCE. However, it truly began to develop as a formal sport in the 16th century.
        </p>
        {/* Rest of your content */}
      </div>
    </div>
  );
}