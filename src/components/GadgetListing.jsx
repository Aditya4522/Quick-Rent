import React from "react";

export default function GadgetListing() {
  const gadgets = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "$50/day",
      features: ["16GB RAM", "512GB SSD", "M1 Chip"],
      description: "A high-performance laptop for all your needs.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/10/15/13/40/laptop-1742462_1280.jpg",
    },
    {
      id: 2,
      name: "Canon DSLR",
      price: "$30/day",
      features: ["24MP", "4K Video", "Wi-Fi Enabled"],
      description: "Capture high-quality images and videos.",
      imageUrl: "https://cdn.pixabay.com/photo/2021/11/30/13/21/vintage-camera-6835351_1280.jpg",
    },
    {
      id: 3,
      name: "PS5 Console",
      price: "$40/day",
      features: ["8K Output", "825GB Storage", "DualSense Controller"],
      description: "The ultimate gaming experience.",
      imageUrl: "https://cdn.pixabay.com/photo/2020/10/08/14/58/fader-5638196_1280.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Gadgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {gadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="p-6 bg-gray-100 rounded-lg shadow-lg"
            >
              {/* Gadget Image */}
              <img
                src={gadget.imageUrl}
                alt={gadget.name}
                className="w-full mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{gadget.name}</h3>
              <p className="mb-4 text-lg font-semibold">{gadget.price}</p>
              <ul className="list-disc pl-6 mb-4">
                {gadget.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* Rent Now Button */}
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
