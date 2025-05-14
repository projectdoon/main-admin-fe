import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MultiplicationSignIcon } from "@hugeicons/core-free-icons";

const FilterModal = ({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-[300px] sm:w-[350px] md:w-[400px] h-full p-6 rounded-l-2xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={onClose} className="text-black text-xl">
            <HugeiconsIcon icon={MultiplicationSignIcon} className="w-6 h-6" />
          </button>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col space-y-5 flex-1">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Department
            </label>
            <div className="mt-1">
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600">
                <option>Department</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <div className="mt-1">
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600">
                <option>District</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              />
            </div>
          </div>
          {/* <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-800">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full mt-1 px-4 py-3 text-gray-500 border border-gray-300 rounded-xl bg-white placeholder-gray-400 appearance-none"
                placeholder="Date"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium text-gray-800">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full mt-1 px-4 py-3 text-gray-500 border border-gray-300 rounded-xl bg-white placeholder-gray-400 appearance-none"
                placeholder="Date"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onApply}
            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
