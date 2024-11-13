"use client";

import { useState } from "react";
import { ArrowRight } from 'lucide-react'
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">About Our Fraternity</h2>
            <p className="text-gray-300 mb-4 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
              Alpha Beta Gamma is more than just a fraternity – it&apos;s a brotherhood that fosters personal growth,
              academic excellence, and lifelong friendships. Founded in 1950, we have a rich history of producing
              leaders and making a positive impact on our community.
            </p>
            <p className="text-gray-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
              Our members come from diverse backgrounds but share a common goal: to become the best versions of
              themselves while supporting one another throughout their college journey and beyond.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/images/about/chapter.png"
              alt="Fraternity house"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Brotherhood", description: "Foster lifelong friendships and support networks" },
              { title: "Leadership", description: "Develop strong leaders for our community and beyond" },
              { title: "Excellence", description: "Strive for the highest standards in all we do" }
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md border border-gold">
                <h3 className="text-xl font-semibold mb-2 text-gold">{value.title}</h3>
                <p className="text-gray-300 ">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">Join Alpha Beta Gamma</h2>
          <p className="text-gray-300 mb-8 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            Are you ready to embark on a journey of personal growth, leadership, and brotherhood? Alpha Beta Gamma
            is always looking for motivated individuals to join our ranks. Take the first step towards a lifetime
            of meaningful connections and experiences.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 flex items-center justify-center mx-auto">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
