import React from "react";
import { MultiplicationSignIcon } from "@hugeicons/react";

const PublishModal = ({
  isOpen,
  onClose,
  onSubmit,
  onConfirm,
  comment,
  setComment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <MultiplicationSignIcon size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Ready to publish?</h2>
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Comment for correction
          </label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            className="w-full px-4 py-2 rounded-lg border shadow-sm outline-none text-[#5C5C5C] placeholder-[#5C5C5C]"
          />
        </div>
        <button
          onClick={onSubmit}
          className="w-[70%] bg-[#ED1C25] text-white py-2 rounded-md mx-auto block mb-4"
        >
          Submit
        </button>
        <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
          <span className="border-t border-gray-300 flex-grow mr-2"></span>
          or
          <span className="border-t border-gray-300 flex-grow ml-2"></span>
        </div>
        <button
          onClick={onConfirm}
          className="w-full bg-[#3A81F1] text-white py-2 rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PublishModal;
