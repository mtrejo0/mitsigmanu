"use client";

export default function RushPage() {
  const rushPhotos = [
    { id: "rush1.jpg", caption: "Cute bros hanging out in Puerto Rico." },
    { id: "rush2.jpg", caption: "Brothers presenting their ring." },
    { id: "rush3.jpg", caption: "Look at those rings!" },
    { id: "rush4.jpg", caption: "Newly initiated brothers!" },
    { id: "rush5.jpg", caption: "Spring Retreat 2023" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">2024 Fall Rush</h1>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-center">
            Fill out our <a href="#" className="text-gold hover:text-yellow-400">interest form</a> to keep in contact!
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Events (Pre-Kickoff)</h2>
        <div className="prose prose-invert max-w-none mb-12">
          <p className="italic">All events are also on the IFC schedule</p>

          <h3 className="text-2xl font-semibold text-gold mt-6">Kresge Kickoff</h3>
          <ul className="list-none pl-0">
            <li><strong>Date:</strong> 08/31, 12:00 PM-12:00 AM</li>
            <li><strong>Venue:</strong> Kresge Auditorium</li>
            <li><strong>Address:</strong> 48 Massachusetts Ave, Cambridge, MA 02139 (Building W16)</li>
            <li><strong>Type:</strong> Other</li>
          </ul>

          <p className="text-xl font-bold mt-6">ALL EVENTS ANNOUNCED POST-KICKOFF</p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Pictures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rushPhotos.map((photo, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gold">
              <img 
                src={`/images/rush/${photo.id}`}
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-300">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Note from the Rush Chairs</h2>
        <div className="prose prose-invert max-w-none mb-12">
          <p>
            Sigma Nu is much more than a fraternity; it is a group of loving brothers who push each other to be the best they can be. Our beautiful home is filled with rich camaraderie, hysterical inside jokes, and ever-lasting memories that brothers have come to cherish for a lifetime. Late night journeys to 7-Eleven, Saturday night half-off burgers at Pour House, and playing Smash Bros in the Den are just some of the many traditions brothers of Sigma Nu have come to love!
          </p>
          <p>
            Brothers take active roles on campus, becoming leaders and being involved with various clubs. In addition, brothers at Sigma Nu are driven to succeed at the highest academic level and have interned at premier companies such as the Jet Propulsion Lab, Google, Chevron, Microsoft, Twitter, and Facebook. Our alumni have gone on to work at Snapchat, Facebook, Microsoft, GE, BCG or have continued their academic careers in prestigious PhD programs at Stanford and MIT.
          </p>
          <p>
            We have members who come from all around the world with a wide variety of interests: music, world cultures, athletics, video games, community work, and more. Brothers are always willing to explore new things and meet new people, allowing our fraternity to bolster with interesting conversations and explorations. These explorations forge life-long bonds of brotherhood and friendship at Sigma Nu.
          </p>
          <p className="font-semibold mt-6">
            Fraternally,<br/>
            Sigma Nu Epsilon Theta Recruitment Chairs
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gold">Contact Info</h2>
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl">
            Rush starts 08/31! Fill out our <a href="#" className="text-gold hover:text-yellow-400">Interest Form</a>!
          </p>
          <p>
            Follow us on <a href="#" className="text-gold hover:text-yellow-400">Instagram</a> and check out our <a href="#" className="text-gold hover:text-yellow-400">Facebook</a>!
          </p>
          <p className="mt-6">
            <strong>Contact our rush team</strong><br/>
            Russell Perez: <a href="tel:5617740484" className="text-gold hover:text-yellow-400">561-774-0484</a><br/>
            Brios Olivares: <a href="tel:9175144271" className="text-gold hover:text-yellow-400">917-514-4271</a>
          </p>
        </div>
      </div>
    </div>
  );
}