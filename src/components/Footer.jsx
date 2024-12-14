import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 QuickRent, All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
