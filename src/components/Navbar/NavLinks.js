import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  const [showModal, setShowModal] = useState(false);

  const handleComingSoon = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <button
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        onClick={handleComingSoon}
      >
        Crypto Token
      </button>
      <button
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        onClick={handleComingSoon}
      >
        Crypto Investment Plan
      </button>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#Portfolio"
      >
        Portfolio
      </HashLink>
      <HashLink
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/contact#contact"
      >
        Contact Us
      </HashLink>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p>We are working hard on this feature. Stay tuned!</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavLinks;
