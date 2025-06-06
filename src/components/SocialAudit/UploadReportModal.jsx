import React, { useState } from "react";
import {
  MultiplicationSignIcon,
  FileUploadIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const UploadReportModal = ({ isOpen, onClose, onUpload }) => {
  const [reportName, setReportName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const isValid =
      file && (file.type === "application/pdf" || file.type === "text/csv");
    if (!isValid) {
      alert("Please upload a .csv or .pdf file only.");
      e.target.value = ""; // Reset the input
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleConfirm = () => {
    if (!reportName || !selectedFile) {
      alert("Please provide both report name and file.");
      return;
    }
    // TODO: handle upload logic
    onUpload({ name: reportName, file: selectedFile });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#101828b3] z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
        <div className="relative bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
          <button
            className="absolute top-3 right-3 text-gray-500"
            onClick={onClose}
          >
            <HugeiconsIcon icon={MultiplicationSignIcon} className="w-5 h-5" />
          </button>

          <h2 className="text-lg font-semibold mb-4">Upload Report</h2>

          <input
            type="text"
            placeholder="Report Name"
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border shadow-sm outline-none text-[#5C5C5C] placeholder-[#5C5C5C]"
          />

          <label
            htmlFor="reportFile"
            className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#3A81F1] rounded-md py-8 text-center cursor-pointer mb-6"
          >
            <HugeiconsIcon icon={FileUploadIcon} className="w-6 h-6" />
            <p className="font-medium text-black">Upload Report</p>
            <p className="text-sm text-gray-500">.CSV, .PDF</p>
            <input
              type="file"
              id="reportFile"
              accept=".csv,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <div className="flex justify-between mt-4 gap-4">
            <button
              onClick={onClose}
              className="w-full py-2 rounded-lg border border-gray-300 text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="w-full py-2 rounded-lg bg-[#3A81F1] text-white font-medium"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadReportModal;
