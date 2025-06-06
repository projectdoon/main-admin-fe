import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  MultiplicationSignIcon,
  FileDownloadIcon,
} from "@hugeicons/core-free-icons";

const ReportModal = ({ isOpen, onClose, reports = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828] bg-opacity-70">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <HugeiconsIcon icon={MultiplicationSignIcon} />
        </button>
        <h2 className="text-lg font-semibold mb-4">All Reports</h2>
        <div className="space-y-3 max-h-96 overflow-auto">
          {reports.length === 0 ? (
            <p className="text-sm text-gray-500">No reports uploaded yet.</p>
          ) : (
            reports.map((report, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-4 py-2 rounded-lg border hover:shadow transition"
              >
                <span className="text-sm">{report.name}</span>
                <a
                  href={report.url}
                  download
                  className="text-gray-600 hover:text-black"
                  title="Download report"
                >
                  <HugeiconsIcon icon={FileDownloadIcon} />
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
