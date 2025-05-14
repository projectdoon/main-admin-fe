import React from "react";

const ProjectCard = ({
  name,
  department,
  complaints,
  comments,
  startDate,
  endDate,
  status,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-5 flex justify-between items-start w-full cursor-pointer hover:bg-gray-50 transition"
    >
      <div>
        <h3 className="text-lg font-semibold text-black mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          Department: <span className="text-black">{department}</span>
        </p>
        <div className="flex gap-6 text-sm text-gray-600">
          <p>
            Complaints: <span className="text-black">{complaints}</span>
          </p>
          <p>
            Comments: <span className="text-black">{comments}</span>
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">
          Start Date: <span className="text-black">{startDate}</span>
        </p>
        <p className="text-sm text-gray-600">
          End Date: <span className="text-black">{endDate}</span>
        </p>
        <button
          className="mt-4 border-2 border-blue-500 text-blue-500 px-4 py-1 rounded-md font-semibold hover:bg-blue-50"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Status button clicked");
          }}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
