import React from "react";

export default function Lightbox({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative">
        <img
          src={image}
          alt="Enlarged"
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          onClick={(e) => e.stopPropagation()} // Prevent click event propagation
        />
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
