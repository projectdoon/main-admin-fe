import React from "react";

const ProjectCard = ({
  projectName,
  departmentName,
  startDate,
  endDate,
  status,
  projectDates,
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="bg-white rounded-xl shadow-md p-5 flex justify-between items-start w-full cursor-pointer hover:bg-gray-50 transition"
      >
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">
            {projectName}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Department: <span className="text-black">{departmentName}</span>
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <p>
              Complaints: <span className="text-black">0</span>
            </p>
            <p>
              Comments: <span className="text-black">10</span>
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            Start Date:{" "}
            <span className="text-black">{startDate?.slice(0, 10)}</span>
          </p>
          <p className="text-sm text-gray-600">
            End Date:{" "}
            <span className="text-black">{endDate?.slice(0, 10)}</span>
          </p>
          <button
            className="mt-4 border-2 border-blue-500 text-blue-500 px-4 py-1 rounded-md font-semibold hover:bg-blue-50"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Status button clicked");
            }}
          >
            {status === 0 ? "Active" : status === 1 ? "Upcoming" : "Completed"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
