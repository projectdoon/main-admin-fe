import React, { useState, useEffect } from "react";
import axios from "axios";
import { HugeiconsIcon } from "@hugeicons/react";
import { FileUploadIcon, FileDownloadIcon } from "@hugeicons/core-free-icons";
import ReportModal from "./ReportModal";
import UploadReportModal from "./UploadReportModal";

const ProjectDetailView = ({
  project,
  onClose,
  onEdit,
  isPMDetail = false,
}) => {
  const [showReports, setShowReports] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [projectName, setProjectName] = useState({});

  const handleOpenReports = () => setShowReports(true);
  const handleCloseReports = () => setShowReports(false);

  useEffect(() => {
    if (project?.id) {
      axios
        .get(`http://localhost:8000/api/projects/${project.id}`)
        .then((res) => setProjectName(res.data))
        .catch((err) => console.error("Failed to fetch details:", err));
    }
  }, [project?.id]);

  if (!project) return null;

  //will conditionally render both views based on roleguard later
  const PmUpdateView = () => {
    return (
      <div className="p-6 bg-white rounded-xl shadow-xl m-4">
        <button
          onClick={onClose}
          className="text-2xl font-light mb-6 pl-[15px] block"
        >
          &#60;
        </button>

        <div className="px-[79px]">
          {/* Header and buttons */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold">
              {projectName?.name || "Untitled Project"}
            </h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#3A81F1] text-[#000] rounded-[10px] hover:bg-blue-50">
                <HugeiconsIcon icon={FileDownloadIcon} />
                Download Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#3A81F1] text-[#000] rounded-[10px] hover:bg-blue-50">
                <HugeiconsIcon icon={FileDownloadIcon} />
                Download Bills
              </button>
            </div>
          </div>

          <div className="text-md mb-6 space-y-4">
            <div className="flex">
              <span className="font-semibold w-[220px]">Manager Name :</span>
              <p>{projectName?.managerName || "N/A"}</p>
            </div>
            <div className="flex">
              <span className="font-semibold w-[220px] leading-tight">
                Company / <br />
                Organisation Name :
              </span>
              <p>{projectName?.companyName || "N/A"}</p>
            </div>
            <div className="flex">
              <span className="font-semibold w-[220px]">Start Date :</span>
              <p>
                {projectName?.startDate
                  ? new Date(projectName.startDate).toLocaleDateString("en-IN")
                  : "N/A"}
              </p>
            </div>
            <div className="flex">
              <span className="font-semibold w-[220px]">End Date :</span>
              <p>
                {projectName?.endDate
                  ? new Date(projectName.endDate).toLocaleDateString("en-IN")
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Live Images */}
          <h3 className="text-md font-semibold mb-2">Live Images:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                className="w-full h-[180px] border border-[#3A81F1] rounded-xl bg-white flex items-center justify-center"
              >
                <span className="text-sm text-gray-400">No Image</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return isPMDetail ? (
    <PmUpdateView />
  ) : (
    <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto rounded-xl shadow-xl m-4">
      <div className="mb-6">
        <button onClick={onClose} className="text-2xl font-light mb-4 block">
          &#60;
        </button>

        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{projectName?.name}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#3A81F1] text-[#000000] rounded-[10px] hover:bg-blue-50"
            >
              <HugeiconsIcon icon={FileUploadIcon} />
              Upload Report
            </button>
            <UploadReportModal
              isOpen={showUploadModal}
              onClose={() => setShowUploadModal(false)}
              onUpload={(data) => console.log("Uploading: ", data)}
            />
            <div>
              <button
                onClick={handleOpenReports}
                className="flex items-center gap-2 px-4 py-2 border border-[#3A81F1] text-[#000000] rounded-[10px] hover:bg-blue-50"
              >
                <HugeiconsIcon icon={FileDownloadIcon} />
                Download Report
              </button>
              <ReportModal
                isOpen={showReports}
                onClose={handleCloseReports}
                reports={projectName?.reports || []}
              />
            </div>
            <button
              onClick={onEdit}
              className="px-6 py-2 border border-[#EF4444] text-[#000000] rounded-[10px] hover:bg-red-50"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <p>
          <strong>Description:</strong> {projectName?.description || "N/A"}
        </p>
        <p>
          <strong>Department Name:</strong>{" "}
          {projectName?.departmentName || "N/A"}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {projectName?.startDate
            ? new Date(projectName.startDate).toLocaleDateString("en-IN")
            : "N/A"}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {projectName?.endDate
            ? new Date(projectName.endDate).toLocaleDateString("en-IN")
            : "N/A"}
        </p>
        <p>
          <strong>Location of Project:</strong> {projectName?.location || "N/A"}
        </p>
        <div className="flex items-start gap-4 mb-6">
          <p className="font-semibold text-lg leading-snug whitespace-nowrap">
            Approved
            <br />
            Documents :
          </p>

          <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl w-full max-w-md">
            <span className="text-gray-600">File_name.pdf</span>
            <HugeiconsIcon
              icon={FileDownloadIcon}
              className="text-black text-xl cursor-pointer"
            />
          </div>
        </div>

        <p>
          <strong>Approving Authority:</strong> {projectName?.approver || "N/A"}
        </p>
        <p>
          <strong>Audit Organisation:</strong> {projectName?.auditOrg || "N/A"}
        </p>
        <p>
          <strong>Assigned Team:</strong>{" "}
          {projectName?.team?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Uploaded By:</strong> {projectName?.uploadedBy || "N/A"}
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <div className="border border-blue-500 rounded-2xl p-6">
          <h3 className="font-medium text-lg mb-2">Complains</h3>
          <hr className="border-gray-300 mb-4" />
          <div className="space-y-3 text-sm">
            {(projectName?.complaints || []).map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        </div>

        <div className="border border-blue-500 rounded-2xl p-6">
          <h3 className="font-medium text-lg mb-2">Comments</h3>
          <hr className="border-gray-300 mb-4" />
          <div className="space-y-3 text-sm">
            {(projectName?.comments || []).map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
