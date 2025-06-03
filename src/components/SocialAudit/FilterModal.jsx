import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MultiplicationSignIcon } from "@hugeicons/core-free-icons";

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({
      department: selectedDepartment,
      district: selectedDistrict,
      startDate,
      endDate,
    });
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-[300px] sm:w-[350px] md:w-[400px] h-full p-6 rounded-l-2xl shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={onClose} className="text-black text-xl">
            <HugeiconsIcon icon={MultiplicationSignIcon} className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-5 flex-1">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Department
            </label>
            <div className="mt-1">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              >
                <option value="">Select Department</option>
                <option value="Water Resources">Water Resources</option>
                <option value="Electricity">Electricity</option>
                {/* Add more from backend dynamically if needed */}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <div className="mt-1">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              >
                <option value="">Select District</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Pune">Pune</option>
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={handleApply}
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
