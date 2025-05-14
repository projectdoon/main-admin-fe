// AddProjectForm.jsx
import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FileUploadIcon } from "@hugeicons/core-free-icons";

const AddProjectForm = ({ onClose }) => {
  const [members, setMembers] = useState(["Member 1", "Member 2"]); //INITIALLY TWO MEMBERS DEFAULT
  const handleAddMember = () => {
    const newMemberNumber = members.length + 1;
    setMembers([...members, `Member ${newMemberNumber}`]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-[102px] relative">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-lg text-gray-500 hover:text-black"
        >
          &lt;
        </button>
        <h2 className="text-2xl font-bold mb-[29px]">Add Project</h2>

        <form className="space-y-6">
          {/* Project Name & Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Project Name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Department Name
              </label>
              <input
                type="text"
                placeholder="Department"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              placeholder="Enter a description..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full h-28 resize-none"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="bg-[#3A81F1] text-white px-[16px] py-[8px] rounded-lg hover:bg-blue-600"
            >
              Add Date
            </button>
          </div>

          {/* Location */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location of Project
            </label>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Address Line 1"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="District"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            </div>
          </div>

          {/* Documents & Authority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Approved Documents{" "}
                <span className="text-gray-400 font-normal">(If any)</span>
              </label>
              <div className="relative border border-gray-300 rounded-lg px-4 py-3 bg-white flex items-center space-x-3 text-gray-500">
                <HugeiconsIcon
                  icon={FileUploadIcon}
                  className="text-xl text-gray-400"
                />
                <span className="text-sm">Upload Files</span>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Approving Authority
              </label>
              <input
                type="text"
                placeholder="Authority"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Organisation */}
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Organisation
            </label>
            <input
              type="text"
              placeholder="Organisation"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Team */}
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Members
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {members.map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              ))}
            </div>
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                onClick={handleAddMember}
                className="text-sm bg-[#3A81F1] text-white px-[16px] py-[8px] rounded-lg hover:bg-blue-600"
              >
                Add Member
              </button>
            </div>
          </div>

          {/* Status & Uploader */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[78px]">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Status
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700">
                <option>Status: Active</option>
                <option>Status: Completed</option>
                <option>Status: Upcoming</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Uploaded By
              </label>
              <input
                type="text"
                placeholder="Uploader name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2 mb-[78px]">
            <button
              type="submit"
              className="bg-[#3A81F1] text-white font-semibold px-[16px] py-[8px] rounded-lg hover:bg-blue-700 w-[660px] h-[40px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
