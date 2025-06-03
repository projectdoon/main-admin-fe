import React, { useState } from "react";
import { FileUploadIcon, TaskDone02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Popup from "./Popup";

const EditProjectForm = ({
  formData = {},
  handleChange,
  handleSubmit,
  onDelete,
  onComplete,
  onClose,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [member, setMember] = useState(
    formData.members.length ? formData.members : ["", ""]
  );

  const {
    projectName = "",
    departmentName = "",
    description = "",
    startDate = "",
    endDate = "",
    address1 = "",
    address2 = "",
    district = "",
    state = "",
    documents = null,
    authority = "",
    organisation = "",
    members = ["", ""],
    status = "",
    uploadedBy = "",
    managerName = "",
    companyName = "",
    loginEmail = "",
    loginPin = "",
    pmEmail = "",
    pmNumber = "",
  } = formData;

  const handleCompletedClick = () => {
    setPopupOpen(true);
  };

  const handleConfirmCompletion = () => {
    setPopupOpen(false);
    onComplete();
  };
  const handleMemberChange = (index, value) => {
    const updated = [...member];
    updated[index] = value;
    setMember(updated);
  };

  const handleAddMember = () => {
    setMember([...member, ""]);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-2xl font-light mb-4 block">
            &#60;
          </button>
          <h2 className="text-2xl font-bold">Project Name</h2>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#3A81F1] text-[#3A81F1] hover:bg-blue-50 rounded-lg font-medium">
            <HugeiconsIcon icon={FileUploadIcon} />
            Upload Report
          </button>

          <button
            onClick={handleCompletedClick}
            className="flex items-center gap-2 px-4 py-2 border border-[#77DD77] text-[#77DD77] hover:bg-green-50 rounded-lg font-medium"
          >
            <HugeiconsIcon icon={TaskDone02Icon} />
            Completed
          </button>

          <Popup
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            onConfirm={handleConfirmCompletion}
            title="Project Completed?"
            description="This project has been completed."
          />

          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-4 py-2 border border-[#FF0000] text-[#FF0000] hover:bg-red-50 rounded-lg font-medium"
          >
            Delete
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={projectName}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Department Name
            </label>
            <input
              type="text"
              name="departmentName"
              value={departmentName}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Product Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full h-28 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Location of Project
          </label>
          <input
            type="text"
            name="address1"
            value={address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="border rounded-lg px-4 py-2 w-full mb-2"
          />
          <input
            type="text"
            name="address2"
            value={address2}
            onChange={handleChange}
            placeholder="Address Line 2"
            className="border rounded-lg px-4 py-2 w-full mb-2"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="district"
              value={district}
              onChange={handleChange}
              placeholder="District"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
              placeholder="State"
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Approved Documents (If any)
            </label>
            <div className="relative border rounded-lg px-4 py-3 bg-white flex items-center space-x-3 text-gray-500">
              <HugeiconsIcon
                icon={FileUploadIcon}
                className="text-xl text-gray-400"
              />
              <span className="text-sm">Upload Files</span>
              <input
                type="file"
                name="documents"
                onChange={handleChange}
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
              name="authority"
              value={authority}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Organisation
          </label>
          <input
            type="text"
            name="organisation"
            value={organisation}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Team Members
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {member.map((member, index) => (
              <input
                key={index}
                type="text"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                placeholder={`Member ${index + 1}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[78px]">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Status
            </label>
            <select
              name="status"
              value={status}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            >
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
              name="uploadedBy"
              value={uploadedBy}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mt-[41px]">
          <div className="flex items-center justify-center gap-4 my-10">
            <hr className="flex-grow border-t border-gray-300" />
            <h3 className="text-[#414651] text-lg font-medium whitespace-nowrap">
              Project Manager
            </h3>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[78px]">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Manager Name
              </label>
              <input
                type="text"
                value={managerName}
                onChange={handleChange}
                placeholder="Project Manager Name"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company/Organisation Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Login Email
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={handleChange}
                placeholder="Login Email"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Login PIN
              </label>
              <input
                type="password"
                value={loginPin}
                onChange={handleChange}
                placeholder="PIN"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                PM Email
              </label>
              <input
                type="email"
                value={pmEmail}
                onChange={handleChange}
                placeholder="PM Email"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                PM Number
              </label>
              <input
                type="text"
                value={pmNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="border rounded-lg px-4 py-2 w-full placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2 mb-[78px]">
          <button
            type="submit"
            className="bg-[#3A81F1] text-white font-semibold px-[16px] py-[8px] rounded-lg hover:bg-blue-700 w-[660px] h-[40px]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
