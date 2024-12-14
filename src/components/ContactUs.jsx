import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of form submission (you can send the data to a backend server here)
    alert("Message submitted successfully!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form
          className="max-w-xl mx-auto space-y-4"
          onSubmit={handleSubmit} // Handle the form submission
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange} // Update state on input change
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange} // Update state on input change
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange} // Update state on input change
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
