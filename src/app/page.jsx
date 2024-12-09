"use client";
import React from "react";
import { useState } from "react";

function MainComponent() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const [reviewVoucher, setReviewVoucher] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [forumFilter, setForumFilter] = useState("all");
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const validVouchers = ["ECO2024", "WILD2024", "GREEN24"];
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thanks for subscribing! We'll keep you updated.");
      setEmail("");
    }
  };
  const handleLearnMore = (destination) => {
    window.open(
      `https://www.zimbabwetourism.net/destination/${destination
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      "_blank"
    );
  };
  const handleBookNow = (lodge) => {
    window.open(
      `https://www.booking.com/zimbabwe/${lodge
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      "_blank"
    );
  };
  const handleTransportOption = (option) => {
    window.open(
      `https://www.zimbabwetourism.net/transport/${option
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      "_blank"
    );
  };
  const handleJoinDiscussion = (forum) => {
    window.open(
      `https://community.ecotour.com/forum/${forum
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      "_blank"
    );
  };
  const handleReviewSubmit = () => {
    if (validVouchers.includes(reviewVoucher)) {
      setReviewError("");
      alert("Review submitted successfully!");
      setReviewVoucher("");
    } else {
      setReviewError("Invalid voucher code. Please try again.");
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "destinations":
        return (
          <div className="container mx-auto px-4 py-8 relative z-10">
            <h2 className="text-3xl font-crimson-text mb-6">Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-crimson-text text-xl mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{dest.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#1a4731]">
                        <i className="fas fa-leaf mr-2"></i>
                        Score: {dest.ecoScore}
                      </span>
                      <button
                        onClick={() => handleLearnMore(dest.name)}
                        className="bg-[#1a4731] text-white px-4 py-2 rounded hover:bg-[#143728] transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "lodging":
        return (
          <div className="container mx-auto px-4 py-8 relative z-10">
            <h2 className="text-3xl font-crimson-text mb-6">Lodges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lodges.map((lodge, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={lodge.image}
                    alt={lodge.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-crimson-text text-xl mb-2">
                      {lodge.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{lodge.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {lodge.amenities.map((amenity, j) => (
                        <span
                          key={j}
                          className="bg-[#e8f5e9] text-[#1a4731] px-2 py-1 rounded text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleBookNow(lodge.name)}
                      className="w-full bg-[#1a4731] text-white py-2 rounded hover:bg-[#143728] transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "transport":
        return (
          <div className="container mx-auto px-4 py-8 relative z-10">
            <h2 className="text-3xl font-crimson-text mb-6">
              Eco-Friendly Transport
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transport.map((option, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <i
                      className={`${option.icon} text-[#1a4731] text-2xl mr-4`}
                    ></i>
                    <h3 className="font-crimson-text text-xl">{option.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <button className="text-[#1a4731] font-roboto">
                    View Options →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "community":
        return (
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-crimson-text">Community Forum</h2>
              <div className="flex gap-4">
                <select
                  className="px-4 py-2 rounded-lg border border-gray-300"
                  onChange={(e) => setForumFilter(e.target.value)}
                  value={forumFilter}
                >
                  <option value="all">All Topics</option>
                  <option value="recent">Recent Posts</option>
                  <option value="popular">Most Active</option>
                </select>
                <button
                  onClick={() => setShowNewThreadForm(!showNewThreadForm)}
                  className="bg-[#1a4731] text-white px-4 py-2 rounded-lg hover:bg-[#143728] transition-colors"
                >
                  New Thread
                </button>
              </div>
            </div>

            {showNewThreadForm && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="font-crimson-text text-xl mb-4">
                  Start New Thread
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Thread Title"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  />
                  <textarea
                    placeholder="Thread Content"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 h-32"
                  ></textarea>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setShowNewThreadForm(false)}
                      className="px-4 py-2 rounded-lg border border-gray-300"
                    >
                      Cancel
                    </button>
                    <button className="bg-[#1a4731] text-white px-4 py-2 rounded-lg hover:bg-[#143728] transition-colors">
                      Post Thread
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forums
                .filter((forum) => {
                  if (forumFilter === "recent") return forum.posts > 100;
                  if (forumFilter === "popular") return forum.members > 1000;
                  return true;
                })
                .map((forum, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="font-crimson-text text-xl mb-4">
                      {forum.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{forum.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {forum.posts} posts • {forum.members} members
                      </span>
                      <button
                        onClick={() => handleJoinDiscussion(forum.title)}
                        className="text-[#1a4731] font-roboto hover:text-[#143728]"
                      >
                        Join Discussion →
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-crimson-text text-xl mb-4">
                Submit a Review
              </h3>
              <p className="text-gray-600 mb-4">
                Please enter your booking voucher code to submit a review:
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={reviewVoucher}
                  onChange={(e) => setReviewVoucher(e.target.value)}
                  placeholder="Enter voucher code"
                  className="px-4 py-2 rounded-lg border border-gray-300"
                />
                <button
                  onClick={handleReviewSubmit}
                  className="bg-[#1a4731] text-white px-4 py-2 rounded-lg hover:bg-[#143728] transition-colors"
                >
                  Submit Review
                </button>
              </div>
              {reviewError && (
                <p className="text-red-500 mt-2">{reviewError}</p>
              )}
            </div>
          </div>
        );
      case "tips":
        return (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-crimson-text mb-6">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() =>
                      setSelectedTip(selectedTip === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-crimson-text text-xl">{tip.title}</h3>
                      <i
                        className={`fas fa-chevron-${
                          selectedTip === index ? "up" : "down"
                        } text-[#1a4731]`}
                      ></i>
                    </div>
                    {selectedTip === index && (
                      <div className="mt-4 text-gray-600">
                        <p>{tip.description}</p>
                        <ul className="mt-2 list-disc list-inside">
                          {tip.points.map((point, i) => (
                            <li key={i} className="mt-1">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (

          <>
            <div className="relative h-[600px]">
              <img
                src="./images/victoria-falls.jpg" alt="victoria Falls"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-crimson-text mb-4 text-center">
                  Discover Zimbabwe Sustainably
                </h1>
                <p className="text-xl md:text-2xl font-roboto mb-8 text-center">
                  Experience nature responsibly. Preserve our future.
                </p>
                <button className="bg-[#1a4731] text-white px-8 py-3 rounded-lg font-roboto text-lg hover:bg-[#143728] transition-colors">
                  Start Your Eco-Adventure
                </button>
              </div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874234.6759721777!2d27.0000000!3d-19.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xa1c0385fc5cbbfee!2sZimbabwe!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg mb-12"
                title="Interactive Map of Zimbabwe"
              ></iframe>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-transform"
                  >
                    <i
                      className={`${feature.icon} text-[#1a4731] text-3xl mb-4`}
                    ></i>
                    <h2 className="font-crimson-text text-2xl mb-4">
                      {feature.title}
                    </h2>
                    <p className="font-roboto text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <button className="text-[#1a4731] font-roboto hover:text-[#143728]">
                      {feature.cta} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a4731] text-white py-6 relative z-10">
              <div className="container mx-auto px-4 text-center">
                <h2 className="font-crimson-text text-3xl mb-4">
                  Join Our Community
                </h2>
                <p className="font-roboto mb-6">
                  Get updates on sustainable travel opportunities and
                  conservation efforts.
                </p>
                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-lg text-black w-full md:w-auto focus:ring-2 focus:ring-[#2c5530] outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#2c5530] text-white px-6 py-2 rounded-lg font-roboto w-full md:w-auto hover:bg-[#234226] transition-colors transform hover:scale-105"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <nav className="bg-[#1a4731] p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-leaf text-[#8bc34a] text-2xl"></i>
            <span className="text-white font-crimson-text text-2xl">
              EcoTour
            </span>
          </div>
          <div className="hidden md:flex space-x-6 text-white font-roboto">
            {[
              "home",
              "destinations",
              "lodging",
              "transport",
              "community",
              "tips",
            ].map((section) => (
              <button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`hover:text-[#8bc34a] transition-colors ${
                  selectedSection === section ? "text-[#8bc34a]" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#2c5530] text-white px-4 py-2 rounded-lg font-roboto hover:bg-[#234226] transition-colors">
              <i className="fas fa-user mr-2"></i>
              Sign In
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {[
              "home",
              "destinations",
              "lodging",
              "transport",
              "community",
              "tips",
            ].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setSelectedSection(section);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white font-roboto py-2 px-4 hover:bg-[#234226]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {renderContent()}
    </div>
  );
}

const features = [
  {
    icon: "fas fa-map-marked-alt",
    title: "Eco-Travel Planning",
    description:
      "Create your sustainable journey with our interactive planning tools.",
    cta: "Plan Now",
  },
  {
    icon: "fas fa-home",
    title: "Sustainable Stays",
    description:
      "Discover eco-lodges and green accommodations across Zimbabwe.",
    cta: "Find Lodges",
  },
  {
    icon: "fas fa-users",
    title: "Community Reviews",
    description: "Read authentic experiences from eco-conscious travelers.",
    cta: "Read Reviews",
  },
];

const travelTips = [
  {
    title: "Sustainable Packing",
    description: "Pack light and eco-friendly with these essential tips:",
    points: [
      "Use reusable water bottles and containers",
      "Pack biodegradable toiletries",
      "Bring a reusable shopping bag",
      "Choose sustainable clothing materials",
    ],
  },
  {
    title: "Wildlife Viewing Ethics",
    description:
      "Follow these guidelines for responsible wildlife observation:",
    points: [
      "Maintain safe distances from animals",
      "Never feed wildlife",
      "Use quiet transportation options",
      "Support conservation efforts",
    ],
  },
  {
    title: "Local Community Support",
    description: "Ways to positively impact local communities:",
    points: [
      "Buy from local artisans",
      "Use local guides",
      "Learn basic local phrases",
      "Respect cultural customs",
    ],
  },
];
const destinations = [
  {
    name: "Victoria Falls",
    description:
      "Experience the world's largest waterfall while supporting local conservation.",
    image: "victoria-falls.jpg",
    ecoScore: "9.5/10",
  },
  {
    name: "Hwange National Park",
    description: "Home to diverse wildlife and sustainable safari experiences.",
    image: "hwange.jpg",
    ecoScore: "9.2/10",
  },
  {
    name: "Matobo Hills",
    description: "Ancient rock formations with rich cultural heritage.",
    image: "matobo.jpg",
    ecoScore: "8.8/10",
  },
  {
    name: "Mana Pools",
    description:
      "UNESCO World Heritage site with exceptional wildlife viewing.",
    image: "mana-pools.jpg",
    ecoScore: "9.3/10",
  },
  {
    name: "Gonarezhou National Park",
    description: "Remote wilderness with dramatic landscapes and elephants.",
    image: "gonarezhou.jpg",
    ecoScore: "9.0/10",
  },
  {
    name: "Nyanga National Park",
    description: "Zimbabwe's highest peak with ancient ruins and waterfalls.",
    image: "nyanga.jpg",
    ecoScore: "8.7/10",
  },
];
const lodges = [
  {
    name: "Victoria Falls Eco Lodge",
    description: "Solar-powered luxury overlooking the falls.",
    image: "eco-lodge1.jpg",
    amenities: ["Solar Power", "Water Recycling", "Local Staff"],
  },
  {
    name: "Hwange Green Camp",
    description: "Sustainable safari accommodation in the wilderness.",
    image: "eco-lodge2.jpg",
    amenities: ["Zero Waste", "Farm-to-Table", "Community Projects"],
  },
  {
    name: "Matobo Eco Resort",
    description: "Traditional meets sustainable in ancient hills.",
    image: "eco-lodge3.jpg",
    amenities: ["Renewable Energy", "Cultural Tours", "Conservation"],
  },
  {
    name: "Mana Pools River Lodge",
    description: "Off-grid luxury tented camp along the Zambezi.",
    image: "eco-lodge4.jpg",
    amenities: ["Solar Power", "Wildlife Conservation", "Local Guides"],
  },
  {
    name: "Gonarezhou Bush Camp",
    description: "Eco-friendly camp in pristine wilderness.",
    image: "eco-lodge5.jpg",
    amenities: ["Sustainable Building", "Community Support", "Green Transport"],
  },
  {
    name: "Nyanga Mountain Lodge",
    description: "Highland retreat with minimal environmental impact.",
    image: "eco-lodge6.jpg",
    amenities: ["Rainwater Harvesting", "Organic Garden", "Waste Management"],
  },
];
const transport = [
  {
    name: "Electric Safari Vehicles",
    description: "Zero-emission game drives in national parks.",
    icon: "fas fa-car",
  },
  {
    name: "Eco-Friendly Transfers",
    description: "Shared shuttles and carbon-offset options.",
    icon: "fas fa-shuttle-van",
  },
  {
    name: "Bicycle Tours",
    description: "Explore cities and rural areas on two wheels.",
    icon: "fas fa-bicycle",
  },
  {
    name: "Walking Safaris",
    description: "Low-impact wildlife viewing with expert guides.",
    icon: "fas fa-hiking",
  },
  {
    name: "Solar Boats",
    description: "Clean energy river cruises on Lake Kariba.",
    icon: "fas fa-ship",
  },
  {
    name: "Train Travel",
    description: "Scenic rail journeys across Zimbabwe.",
    icon: "fas fa-train",
  },
];
const forums = [
  {
    title: "Sustainable Travel Tips",
    description: "Share and learn eco-friendly travel practices.",
    posts: 234,
    members: 1520,
  },
  {
    title: "Wildlife Photography",
    description: "Capture nature responsibly and ethically.",
    posts: 156,
    members: 890,
  },
];

export default MainComponent;