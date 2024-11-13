"use client";

import { useState, useEffect } from "react";
import brothersClassOf2022 from "../../brothers_info/2022.json";

export default function BrothersPage() {
  const [brothersData, setBrothersData] = useState({});
  const [selectedYear, setSelectedYear] = useState();

  // Load brothers data from JSON files and combine them
  useEffect(() => {
    setBrothersData({
        "2022": brothersClassOf2022
    });
    setSelectedYear("2022");
  }, []);

  // Group brothers by year
  const groupedBrothers = Object.values(brothersData).flat().reduce((acc, brother) => {
    const year = brother.graduationYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(brother);
    return acc;
  }, {});

  const years = Object.keys(groupedBrothers).sort((a, b) => b - a); // Sort years descending

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">Our Brothers</h1>

        <div className="flex justify-center gap-4 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md ${
                selectedYear === year 
                  ? "bg-gold text-black"
                  : "bg-gray-800 text-gold hover:bg-gold hover:text-black"
              } transition-colors duration-300`}
            >
              {year}
            </button>
          ))}
        </div>

        {selectedYear && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedBrothers[selectedYear].map((brother, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gold">
                {brother.id && (
                  <img 
                    src={`/images/brothers/${brother.graduationYear}/${brother.id}.png`}
                    alt={brother.name}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gold">{brother.name}</h2>
                  <p className="text-gray-300 mb-2">Class of {brother.graduationYear}</p>
                  {brother.major && (
                    <p className="text-gray-300 mb-2">Major: {brother.major}</p>
                  )}
                  {brother.bio && (
                    <p className="text-gray-300 mt-4">{brother.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}