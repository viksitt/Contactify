import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          ></div>
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="relative bg-white w-[90%] max-w-[400px] p-4 rounded-lg shadow-lg">
              {/* Close Button */}
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700"
                />
              </div>
              {/* Modal Content */}
              {children}
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
