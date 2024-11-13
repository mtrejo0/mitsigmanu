"use client";

import { useState, useEffect } from "react";

export default function SummerHousingPage() {
  const amenityImages = [
    {id: "chapter.png", title: "Fully Equipped Kitchen", caption: "Modern kitchen with all appliances"},
    {id: "chapter.png", title: "Common Areas", caption: "Spacious common rooms for relaxing"},
    {id: "chapter.png", title: "Billiards Room", caption: "Entertainment area with pool table"},
    {id: "chapter.png", title: "Sample Bedroom", caption: "Furnished bedrooms with desk and storage"},
    {id: "chapter.png", title: "Laundry Facilities", caption: "On-site laundry room"},
    {id: "chapter.png", title: "Building Exterior", caption: "Historic brownstone in Kenmore"}
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">Summer Housing</h1>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl">
            Looking for summer housing in Boston? Sigma Nu MIT offers an exceptional living experience in a prime location. 
            Our historic brownstone provides comfortable, affordable accommodations with great amenities and a vibrant community atmosphere.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Location</h2>
        <div className="prose prose-invert max-w-none mb-12">
          <p>
            Our house is located at 99 Bay State Road in the heart of Kenmore. The house itself is a beautiful six-story brownstone mansion that includes a fully-equipped kitchen and several large common areas. We are conveniently located near public transportation, including the Kenmore Square Green Line Stop (B,C, and D Line Trains), so getting in and around the city is easy. Fenway park is a 5 minute walk away, so we recommend you take in a Red Sox game or two while you're here.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Our Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenityImages.map((image, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gold">
              <img 
                src={`/images/summer_housing/${image.id}`}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gold">{image.title}</h3>
                <p className="text-gray-300">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gold">Amenities Include</h2>
          <ul className="list-disc pl-6">
            <li>High Speed Wifi</li>
            <li>Kitchen Facilities</li>
            <li>Billiard Table</li>
            <li>Foosball Table</li>
            <li>Large Common Areas and Landings</li>
            <li>Laundry/Dryer Machines</li>
            <li>Utilities/Hot Water Included</li>
          </ul>

          <h2 className="text-3xl font-bold my-8 text-gold">Pricing</h2>
          <p>
            For the summer of 2024, we have singles, doubles, triples, and quads available for rent from May 25th to August 17th. Once you are approved for housing a spot will be reserved for you. You will have five (5) business days to return a signed lease agreement and a security deposit of $300. If you fail to submit a contract and/or deposit in this timeframe, your spot will be released. Full payment of the summer rent is due on or prior to May 23rd. If you prefer to pay your rent in two installments (1/2 on or before May 23rd and 1/2 on July 1st), a fee of $200 will be charged.
          </p>

          <h3 className="text-2xl font-bold my-6 text-gold">Rental Rates</h3>
          <table className="w-full border-collapse border border-gold">
            <thead>
              <tr className="bg-gray-900">
                <th className="border border-gold p-2">Room Size</th>
                <th className="border border-gold p-2">Rates ranging from</th>
                <th className="border border-gold p-2">No. of Rooms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gold p-2">Single</td>
                <td className="border border-gold p-2">$3,300 - $4,620</td>
                <td className="border border-gold p-2">8 rooms</td>
              </tr>
              <tr>
                <td className="border border-gold p-2">Double</td>
                <td className="border border-gold p-2">$3,080 - $3,740</td>
                <td className="border border-gold p-2">4 rooms</td>
              </tr>
              <tr>
                <td className="border border-gold p-2">Triple</td>
                <td className="border border-gold p-2">$2,970 - $3,190</td>
                <td className="border border-gold p-2">2 rooms</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold my-8 text-gold">House Rules</h2>
          <p>
            Summer boarders are allowed to have guests over, within reason. Boarders are responsible for the actions of their guests. Boarders are responsible for the cleanliness of their own rooms. In addition, boarders are responsible for upkeep of some common spaces around the house, in a rotating job assigned by the house manager. Failure to complete chores in a timely manner will result in fines.
          </p>

          <h2 className="text-3xl font-bold my-8 text-gold">Parking</h2>
          <p>
            We have parking in our back lot which is available for rent. Spaces can be rented for $500 on a first-come, first-serve basis. Additional parking can be found in private lots and garages within a few blocks of the house.
          </p>

          <h2 className="text-3xl font-bold my-8 text-gold">FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gold">I've filled out my form. When can I expect to hear back from you?</h3>
              <p>We receive a lot of inquires and unfortunately cannot respond to all of them. If you do not qualify for house, you likely will not be reached. If you do qualify, you should hear from us with a week. Please check your spam folder as some emails from our @mit.edu address has ended up there.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold">Are you close to public transportation?</h3>
              <p>We are a short walk to Kenmore Station on the MBTA green line and about an 8min walk to the Lansdowne Commuter Rail stop on the Worcester/Framingham Line</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold">Is there a gym in the building?</h3>
              <p>No, we recommend GymIt at 920 Commonwealth Ave. It's about a 20min walk or a short T ride. The monthly costs are very reasonable for students.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold">Do have any responsibilities while living in the house?</h3>
              <p>Yes, we expect that all tenants will maintain a clean leaving environment. Additionally to keep our cost downs and provide fair rents, each resident will be assigned a weekly chore (eg. taking out the trash, cleaning the shared bathroom, etc). This will help maintain an enjoyable living experience for the summer. Additionally, there will be a house cleaner service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold">Can I use the kitchen?</h3>
              <p>Absolutely, we have a commercial kitchen and you're welcome to use it for your food preparation. We only ask that you clean up after yourself out of respect for the other residents.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold my-8 text-gold">Contact</h2>
          <p>
            If you are interested in applying for summer housing, please apply at <a href="#" className="text-gold hover:text-yellow-400">this link</a>.
          </p>
          <p>
            If you have any questions, please send an email to <a href="mailto:sn-summer-occupancy@mit.edu" className="text-gold hover:text-yellow-400">sn-summer-occupancy@mit.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
}
