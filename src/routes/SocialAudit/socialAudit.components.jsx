import React, { useState } from "react";
import ProjectCard from "../../components/SocialAudit/ProjectCard";
import ProjectDetailView from "../../components/SocialAudit/ProjectDetailView";
import FilterModal from "../../components/SocialAudit/FilterModal";
import AddProjectForm from "../../components/SocialAudit/AddProjectForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";
import AddRound from "../../assets/Add_round.png";

const SocialAudit = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Project A",
      description:
        "K2 is the exclusive lounge bar at the Radisson Blu Hotel...",
      departmentName: "A1 Department",
      startDate: "2/2/25",
      endDate: "2/2/25",
      location: "Radisson Blu Hotel in Rudrapur...",
      approver: "Mr. Adhiraj Singh",
      auditOrg: "NGO",
      team: [
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
      ],
      uploadedBy: "Mr. Adhiraj Singh",
      complaints: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
      comments: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
    },
    {
      id: 2,
      name: "Project B",
      description:
        "K2 is the exclusive lounge bar at the Radisson Blu Hotel...",
      departmentName: "A1 Department",
      startDate: "2/2/25",
      endDate: "2/2/25",
      location: "Radisson Blu Hotel in Rudrapur...",
      approver: "Mr. Adhiraj Singh",
      auditOrg: "NGO",
      team: [
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
      ],
      uploadedBy: "Mr. Adhiraj Singh",
      complaints: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
      comments: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
    },
    {
      id: 3,
      name: "Project C",
      description:
        "K2 is the exclusive lounge bar at the Radisson Blu Hotel...",
      departmentName: "A1 Department",
      startDate: "2/2/25",
      endDate: "2/2/25",
      location: "Radisson Blu Hotel in Rudrapur...",
      approver: "Mr. Adhiraj Singh",
      auditOrg: "NGO",
      team: [
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
        "Mr. Adhiraj Singh",
      ],
      uploadedBy: "Mr. Adhiraj Singh",
      complaints: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
      comments: [
        "Today will be a power cut from 11:00 AM till 2:00 PM",
        "Today will be a power cut from 11:00 AM till 2:00 PM",
      ],
    },
  ];

  return (
    <div className="p-4 h-full w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "all"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "upcoming"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
        </div>
        <div>
          <HugeiconsIcon
            icon={FilterHorizontalIcon}
            className="text-xl cursor-pointer"
            onClick={() => setShowFilterModal(true)}
          />
        </div>
      </div>

      <div className="overflow-y-auto pr-2 flex-1">
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => {
                console.log("Clicked project:", project.name);
                setSelectedProject(project);
              }}
            />
          ))}
        </div>
      </div>

      <button
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-500 shadow-md hover:bg-blue-600 flex items-center justify-center z-40"
        onClick={() => setShowAddForm(true)}
      >
        <img src={AddRound} alt="Add" className="w-6 h-6" />
      </button>

      {selectedProject && (
        <ProjectDetailView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {showAddForm && <AddProjectForm onClose={() => setShowAddForm(false)} />}

      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
    </div>
  );
};

export default SocialAudit;
