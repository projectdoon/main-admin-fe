import React, { useState } from "react";
import { useEffect, useMemo } from "react";
import axios from "axios";
import ProjectCard from "../../components/SocialAudit/ProjectCard";
import ProjectDetailView from "../../components/SocialAudit/ProjectDetailView";
import FilterModal from "../../components/SocialAudit/FilterModal";
import AddProjectForm from "../../components/SocialAudit/AddProjectForm";
import EditProjectForm from "../../components/SocialAudit/EditProjectForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";
import AddRound from "../../assets/Add_round.png";

const SocialAudit = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    department: "",
    district: "",
    startDate: "",
    endDate: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isPMUpdateMode, setIsPMUpdateMode] = useState(false);

  //backend
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/projects/getAllProjects"
        );
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to get projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const displayProjects = useMemo(() => {
    const source = filteredProjects.length > 0 ? filteredProjects : projects;

    switch (activeTab) {
      case "upcoming":
        return source.filter((project) => project.status === 1);
      case "completed":
        return source.filter((project) => project.status === 2);
      case "pmupdates":
        return source.filter((project) => project.status === 0); // "Active" = 0
      case "all":
      default:
        return source;
    }
  }, [activeTab, filteredProjects, projects]);

  const applyFilters = (filters) => {
    setFilters(filters);

    const filteredList = projects.filter((project) => {
      const matchesDepartment =
        !filters.department || project.departmentName === filters.department;
      const matchesDistrict =
        !filters.district || project.district === filters.district;

      const matchesStart =
        !filters.startDate ||
        new Date(project.startDate) >= new Date(filters.startDate);
      const matchesEnd =
        !filters.endDate ||
        new Date(project.endDate) <= new Date(filters.endDate);

      return matchesDepartment && matchesDistrict && matchesStart && matchesEnd;
    });

    setFilteredProjects(filteredList);
  };

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setShowFilterModal(false);
  };

  const handlePMUpdatesClick = () => {
    setIsPMUpdateMode(true);
    setActiveTab("pmupdates");
    setSelectedProject(null);
    setIsEditing(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsPMUpdateMode(false);
    setSelectedProject(null);
    setIsEditing(false);
  };

  const handleMemberChange = (index, value) => {
    setSelectedProject((prev) => {
      const updatedTeam = [...(prev?.team || [])];
      updatedTeam[index] = value;
      return {
        ...prev,
        team: updatedTeam,
      };
    });
  };

  return (
    <div className="p-4 h-full w-full flex flex-col pt-[32px] pr-[33px] pl-[33px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "all" ? "border-black text-black" : "text-black"
            }`}
            onClick={() => {
              handleTabClick("all");
            }}
          >
            All
          </button>
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "upcoming"
                ? "border-black text-black"
                : "text-black"
            }`}
            onClick={() => {
              handleTabClick("upcoming");
            }}
          >
            Upcoming
          </button>
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "completed"
                ? "border-black text-black"
                : " text-black"
            }`}
            onClick={() => {
              handleTabClick("completed");
            }}
          >
            Completed
          </button>
          <button
            className={`font-semibold border-b-2 pb-1 ${
              activeTab === "pmupdates"
                ? "border-black text-black"
                : " text-black"
            }`}
            onClick={() => {
              handlePMUpdatesClick();
            }}
          >
            PM Updates
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
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => {
                console.log("Clicked project:", project.name);
                setSelectedProject(project);
                setIsEditing(false);
              }}
              isPMUpdateMode={isPMUpdateMode}
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
      {selectedProject && !isEditing && (
        <ProjectDetailView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEdit={() => setIsEditing(true)}
          isPMDetail={isPMUpdateMode}
        />
      )}
      {selectedProject && isEditing && (
        <EditProjectForm
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setIsEditing(false);
          }}
        />
      )}{" "}
      {showAddForm && <AddProjectForm onClose={() => setShowAddForm(false)} />}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onApply={handleApplyFilters}
      />
    </div>
  );
};

export default SocialAudit;
