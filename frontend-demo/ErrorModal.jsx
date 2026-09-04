import React from "react";

function ErrorModal({ show, message, onClose }) {
  if (!show) return null;

  return (
    // Overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 animate-fadeIn">
        {/* Header */}
        <h3 className="text-xl font-semibold text-red-600 mb-4">Error</h3>

        {/* Message */}
        <p className="text-gray-700 mb-6">{message}</p>

        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;