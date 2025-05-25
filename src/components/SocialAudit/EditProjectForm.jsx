// import React, { useState, useEffect } from "react";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { FileUploadIcon } from "@hugeicons/core-free-icons";

// const EditProjectForm = ({
//   onClose,
//   projectData,
//   onDelete,
//   onComplete,
//   onUpload,
// }) => {
//   const [formData, setFormData] = useState({
//     projectName: "",
//     departmentName: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     address1: "",
//     address2: "",
//     district: "",
//     state: "",
//     documents: null,
//     authority: "",
//     organisation: "",
//     members: [],
//     status: "",
//     uploadedBy: "",
//   });

//   useEffect(() => {
//     if (projectData) {
//       setFormData({ ...projectData });
//     }
//   }, [projectData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleMemberChange = (index, value) => {
//     const updated = [...formData.members];
//     updated[index] = value;
//     setFormData((prev) => ({ ...prev, members: updated }));
//   };

//   const handleAddMember = () => {
//     setFormData((prev) => ({
//       ...prev,
//       members: [...prev.members, ""],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit updated formData
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-[102px] relative">
//         <button
//           onClick={onClose}
//           className="absolute top-6 left-6 text-lg text-gray-500 hover:text-black"
//         >
//           &lt;
//         </button>

//         {/* Top Right Buttons */}
//         <div className="absolute top-6 right-6 flex gap-2">
//           <button
//             onClick={onUpload}
//             className="bg-gray-100 text-sm px-3 py-1 rounded hover:bg-gray-200"
//           >
//             Upload Report
//           </button>
//           <button
//             onClick={onComplete}
//             className="bg-green-100 text-sm px-3 py-1 rounded hover:bg-green-200"
//           >
//             Completed
//           </button>
//           <button
//             onClick={onDelete}
//             className="bg-red-100 text-sm px-3 py-1 rounded hover:bg-red-200"
//           >
//             Delete
//           </button>
//         </div>

//         <h2 className="text-2xl font-bold mb-[29px]">Project Name</h2> {/* changed this here */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1">
//                 Project Name
//               </label>
//               <input
//                 type="text"
//                 name="projectName"
//                 value={formData.projectName}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1">
//                 Department Name
//               </label>
//               <input
//                 type="text"
//                 name="departmentName"
//                 value={formData.departmentName}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-4">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               Product Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="border rounded-lg px-4 py-2 w-full h-28 resize-none"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1">
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Location of Project
//             </label>
//             <input
//               type="text"
//               name="address1"
//               value={formData.address1}
//               onChange={handleChange}
//               placeholder="Address Line 1"
//               className="border rounded-lg px-4 py-2 w-full mb-2"
//             />
//             <input
//               type="text"
//               name="address2"
//               value={formData.address2}
//               onChange={handleChange}
//               placeholder="Address Line 2"
//               className="border rounded-lg px-4 py-2 w-full mb-2"
//             />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 placeholder="District"
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 placeholder="State"
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Approved Documents (If any)
//               </label>
//               <div className="relative border rounded-lg px-4 py-3 bg-white flex items-center space-x-3 text-gray-500">
//                 <HugeiconsIcon
//                   icon={FileUploadIcon}
//                   className="text-xl text-gray-400"
//                 />
//                 <span className="text-sm">Upload Files</span>
//                 <input
//                   type="file"
//                   name="documents"
//                   onChange={handleChange}
//                   className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Approving Authority
//               </label>
//               <input
//                 type="text"
//                 name="authority"
//                 value={formData.authority}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-4">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               Organisation
//             </label>
//             <input
//               type="text"
//               name="organisation"
//               value={formData.organisation}
//               onChange={handleChange}
//               className="border rounded-lg px-4 py-2 w-full"
//             />
//           </div>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Members
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {formData.members.map((member, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   value={member}
//                   onChange={(e) => handleMemberChange(index, e.target.value)}
//                   className="border rounded-lg px-4 py-2 w-full"
//                 />
//               ))}
//             </div>
//             <div className="mt-2 flex justify-end">
//               <button
//                 type="button"
//                 onClick={handleAddMember}
//                 className="text-sm bg-[#3A81F1] text-white px-[16px] py-[8px] rounded-lg hover:bg-blue-600"
//               >
//                 Add Member
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[78px]">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Project Status
//               </label>
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               >
//                 <option>Status: Active</option>
//                 <option>Status: Completed</option>
//                 <option>Status: Upcoming</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Uploaded By
//               </label>
//               <input
//                 type="text"
//                 name="uploadedBy"
//                 value={formData.uploadedBy}
//                 onChange={handleChange}
//                 className="border rounded-lg px-4 py-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center pt-2 mb-[78px]">
//             <button
//               type="submit"
//               className="bg-[#3A81F1] text-white font-semibold px-[16px] py-[8px] rounded-lg hover:bg-blue-700 w-[660px] h-[40px]"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProjectForm;
import React from "react";
import { FileUploadIcon, TaskDone02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const EditProjectForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleAddMember,
  handleMemberChange,
  onDelete,
  onComplete,
  project,
}) => {
  if (!project) {
    return <div>Loading project data...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 hover:bg-blue-50">
          <HugeiconsIcon icon={FileUploadIcon} />
          Upload Report
        </button>
        {/* <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 hover:bg-green-50">
          <HugeiconsIcon icon={FileDownloadIcon} />
          Download Report
        </button> */}
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 hover:bg-green-50"
        >
          <HugeiconsIcon icon={TaskDone02Icon} />
          Completed
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-[29px]">Project Name</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
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
              value={formData.departmentName}
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
            value={formData.description}
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
              value={formData.startDate}
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
              value={formData.endDate}
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
            value={formData.address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="border rounded-lg px-4 py-2 w-full mb-2"
          />
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address Line 2"
            className="border rounded-lg px-4 py-2 w-full mb-2"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
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
              value={formData.authority}
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
            value={formData.organisation}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Members
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formData.members.map((member, index) => (
              <input
                key={index}
                type="text"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                className="border rounded-lg px-4 py-2 w-full"
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
              value={formData.status}
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
              value={formData.uploadedBy}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
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
