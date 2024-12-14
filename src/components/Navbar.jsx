import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(""); 

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const openModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

 
  const closeModal = () => {
    setIsModalOpen(false);
    setFormType(""); 
  };

  return (
    <header className="bg-white shadow-md border">
      <nav className="flex justify-between items-center w-full max-w-screen h-16    ">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="QuickRent Logo" className="h-12 md:h-16 object-contain" />
          <span className="text-xl font-bold text-gray-800">QuickRent</span>
        </div>

     
        <div className="hidden md:flex space-x-4">
          <a
            className="text-[18px] border-2 border-black text-black rounded-full px-4 py-2 hover:bg-black hover:text-white font-medium transition duration-200"
            onClick={() => openModal("signup")}
          >
            Sign Up
          </a>

          <a
            className="text-[18px] border-2 border-black text-black rounded-full px-4 py-2 hover:bg-black hover:text-white font-medium transition duration-200"
            onClick={() => openModal("login")}
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden hover:text-black focus:outline-none p-4"
          onClick={handleMenuToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" absolute gap-2 top-16 left-0 w-full bg-white p-5 shadow-md flex justify-center   flex-col items-center md:hidden  z-10">
            <a
              className="text-[18px] border-2 border-black text-black rounded-full px-4 py-2 hover:bg-black hover:text-white font-medium transition duration-200"
              onClick={() => openModal("signup")} 
            >
              Sign Up
            </a>
            <a
              className="text-[18px] border-2 border-black text-black rounded-full px-4 py-2 hover:bg-black hover:text-white font-medium transition duration-200"
              onClick={() => openModal("login")} 
            >
              Login
            </a>
          </div>
        )}
      </nav>

      
      {isModalOpen && (
  <div className="fixed   inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
    <div className=" max-w-2xl bg-white p-8 rounded-lg shadow-lg w-full md:max-w-[300px]  ">
      <h2 className="text-xl font-bold mb-6 text-center">
        {formType === "signup" ? "Sign Up" : "Login"}
      </h2>
      <form className="space-y-4 order-1">
      
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-[50%] flex mx-auto justify-center items-center py-3 border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white transition duration-200"
        >
          {formType === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>
      <div className="flex justify-center mt-6">
        <button
          onClick={closeModal}
          className="px-6 py-2 border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white "
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </header>
  );
}
