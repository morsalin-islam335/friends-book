import PropTypes from "prop-types";
import React from "react";

const ImageModal = ({ isOpen, imageFile, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded shadow-lg max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <img
          src={imageFile}
          alt="Modal Content"
          className="max-w-full max-h-[80vh]"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean to toggle modal visibility
  imageFile: PropTypes.string.isRequired, // Image file URL or base64
  onClose: PropTypes.func.isRequired, // Callback to close the modal
};

export default ImageModal;
