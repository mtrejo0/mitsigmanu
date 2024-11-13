"use client";

import { useState, useEffect } from "react";
import execData from "../../brothers_info/execCurrent.json";

export default function ExecPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">Executive Board</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {execData.map((member, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gold">
              {member.id && (
                <img 
                  src={`/images/brothers/${member.graduationYear}/${member.id}.png`}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gold">{member.name}</h2>
                <p className="text-gray-300 mb-2">Class of {member.graduationYear}</p>
                {member.position && (
                  <p className="text-gray-300 mb-2">Position: {member.position}</p>
                )}
                {member.major && (
                  <p className="text-gray-300 mb-2">Major: {member.major}</p>
                )}
                {member.bio && (
                  <p className="text-gray-300 mt-4">{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
