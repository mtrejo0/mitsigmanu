"use client";

import { useState, useEffect } from "react";
import photosData from "../../brothers_info/photos.json";

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">Photo Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photosData.map((photo, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gold">
              <img 
                src={`/images/photos/${photo.id}`}
                alt={photo.caption}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gold">{photo.title}</h2>
                {photo.date && (
                  <p className="text-gray-300 mb-2">{photo.date}</p>
                )}
                {photo.caption && (
                  <p className="text-gray-300 mt-4">{photo.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
