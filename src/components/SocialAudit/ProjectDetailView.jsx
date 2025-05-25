import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FileUploadIcon, FileDownloadIcon } from "@hugeicons/core-free-icons";

const ProjectDetailView = ({ project, onClose, onEdit }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto rounded-xl shadow-xl m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <button
          className="text-lg font-medium text-red-500 border border-red-400 px-4 py-1 rounded-full hover:bg-red-50"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50">
          <HugeiconsIcon icon={FileUploadIcon} />
          Upload Report
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50">
          <HugeiconsIcon icon={FileDownloadIcon} />
          Download Report
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50"
        >
          Edit
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Department Name:</strong> {project.departmentName}
        </p>
        <p>
          <strong>Start Date:</strong> {project.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {project.endDate}
        </p>
        <p>
          <strong>Location of Project:</strong> {project.location}
        </p>
        <p>
          <strong>Approved Documents:</strong> File_name.pdf
        </p>
        <p>
          <strong>Approving Authority:</strong> {project.approver}
        </p>
        <p>
          <strong>Audit Organisation:</strong> {project.auditOrg}
        </p>
        <p>
          <strong>Assigned Team:</strong> {project.team?.join(", ")}
        </p>
        <p>
          <strong>Uploaded By:</strong> {project.uploadedBy}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Complaints</h3>
          <ul className="list-disc pl-5 text-sm">
            {(project.complaints || []).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Comments</h3>
          <ul className="list-disc pl-5 text-sm">
            {(project.comments || []).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
