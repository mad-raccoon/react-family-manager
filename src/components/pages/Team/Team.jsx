import React from "react";
import { teamApi, commonApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";
import "./Team.css";
import { useState } from "react";
import TeamMemberForm from "../../features/Team/TeamMemberForm";
import TeamMemberDisplay from "../../features/Team/TeamMemberDisplay";
import { Filter } from "../../shared";

const memberAreas = {
  DISPLAY: "display",
  FORM: "form",
};

const Team = () => {
  const { user } = useAuth();
  const teamMembers = teamApi.getActiveTeamMembers(user.teamId);
  const roles = commonApi.getRoles();
  const genders = commonApi.getGenders();

  const [selectedMember, setSelectedMember] = useState(null);
  const [memberArea, setMemberArea] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleMemberSelect = (member) => {
    if (member === selectedMember) {
      setSelectedMember(null);
      setMemberArea(null);
      return;
    }
    setSelectedMember(member);
    setMemberArea(memberAreas.DISPLAY);
  };

  const handleEditMemberInfo = () => {
    setMemberArea(memberAreas.FORM);
  };

  const handleCancel = () => {
    setSelectedMember(null);
    setMemberArea(null);
  };

  const handleAddUpdateTeamMember = (memberInfo) => {
    if (!memberInfo.id && memberInfo.id !== 0) {
      teamApi.addTeamMember(user.teamId, memberInfo);
      setMemberArea(null);
    } else {
      teamApi.updateTeamMember(memberInfo);
      setMemberArea(memberAreas.DISPLAY);
    }
  };

  const handleFilterSelection = (filter) => {
    setSelectedMember(null);
    setSelectedFilter(filter);
    setMemberArea(null);
  };

  const handleDelete = (userId) => {
    teamApi.removeTeamMember(userId);
    setMemberArea(null);
  };

  const availableRoles = () => {
    const available = roles.filter((role) =>
      teamMembers.map((tm) => tm.role).includes(role.value)
    );

    available.unshift({ value: "all", name: "All" });

    if (teamMembers.some((tm) => !tm.role)) {
      available.push({ value: null, name: "No Role" });
    }

    return available;
  };

  const availableTeamMembers = () => {
    if (selectedFilter === "all") return teamMembers;

    return teamMembers.filter((tm) => tm.role === selectedFilter);
  };

  return (
    <div>
      <Filter
        filters={availableRoles()}
        selectedFilter={selectedFilter}
        onFilterSelection={handleFilterSelection}
      />
      <div className="team-container">
        {availableTeamMembers().map((mem) => (
          <div
            key={mem.id}
            className={
              "team-member " +
              (mem.id === user.id ? " me" : "") +
              (mem === selectedMember ? " selected" : "") +
              (!mem.role ? " no-role" : "")
            }
            onClick={() =>
              memberArea !== memberAreas.FORM && handleMemberSelect(mem)
            }
          >
            {mem.name}
          </div>
        ))}
      </div>
      {selectedMember && memberArea === memberAreas.FORM && (
        <TeamMemberForm
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          onSuccess={handleAddUpdateTeamMember}
          onCancel={handleCancel}
        />
      )}
      {selectedMember && memberArea === memberAreas.DISPLAY && (
        <TeamMemberDisplay
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          isEditable={user.isTeamLeader || user.id === selectedMember.id}
          isDeletable={user.isTeamLeader && user.id !== selectedMember.id}
          onEdit={handleEditMemberInfo}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      )}
      {!memberArea && user.isTeamLeader && (
        <input
          type="button"
          value="Add team member"
          onClick={() => setMemberArea(memberAreas.FORM)}
        />
      )}
    </div>
  );
};

export default Team;
