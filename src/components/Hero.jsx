import React, { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative overflow-hidden h-[100vh] py-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/logo2.jpg" // Ensure the image path is correct
          alt="Gadget Rentals"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Tagline Section */}
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Rent the Latest Gadgets with Ease
        </h1>
        <p className="text-xl text-white mb-6">
          Explore a wide sprange of gadgets and gear for all your needs. Rent
          today and experience the future.
        </p>

        {/* Call-to-Action Button */}
        <button
          onClick={openModal}
          className="inline-block px-8 py-3 bg-black text-white text-lg rounded-full font-medium transition duration-300 hover:bg-gray-800"
        >
          Explore Rentals
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 max-w-sm">
            <h2 className="text-xl font-bold mb-6 text-center">
              Explore Our Rentals
            </h2>
            <p className="text-center mb-4">
              Browse through our collection of gadgets and gear to rent today.
            </p>
            <button
              onClick={closeModal}
              className="w-full py-3 border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
