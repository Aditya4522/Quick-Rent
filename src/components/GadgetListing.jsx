import React from "react";

export default function GadgetListing() {
  const gadgets = [
    { name: "MacBook Pro", price: "$50/day", features: ["16GB RAM", "512GB SSD"] },
    { name: "Canon DSLR", price: "$30/day", features: ["24MP", "4K Video"] },
    { name: "PS5 Console", price: "$40/day", features: ["8K Output", "825GB Storage"] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Gadgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {gadgets.map((gadget, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{gadget.name}</h3>
              <p className="mb-4 text-lg font-semibold">{gadget.price}</p>
              <ul className="list-disc pl-6 mb-4">
                {gadget.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Rent Now
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            List Your Gadget
          </button>
        </div>
      </div>
    </section>
  );
}
