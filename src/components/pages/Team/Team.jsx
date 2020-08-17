import React from "react";
import { teamApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";
import "./Team.css";
import { useState } from "react";
import TeamMemberForm from "../../features/Team/TeamMemberForm";
import TeamMemberDisplay from "../../features/Team/TeamMemberDisplay";

const roles = [
  { value: "tl", name: "Team Leader" },
  { value: "fed", name: "Frontend Developer" },
  { value: "bed", name: "Backend Developer" },
  { value: "dbd", name: "Database Developer" },
  { value: "tt", name: "Tester" },
];

const genders = [
  { value: "m", name: "Male" },
  { value: "f", name: "Female" },
];

const memberAreas = {
  DISPLAY: "display",
  FORM: "form",
};

const Team = () => {
  const { user } = useAuth();
  const teamMembers = teamApi.getActiveTeamMembers(user.team);

  const [selectedMember, setSelectedMember] = useState(null);
  const [memberArea, setMemberArea] = useState(null);

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
      teamApi.addTeamMember(user.team, memberInfo);
    }

    teamApi.updateTeamMember(memberInfo);
    setMemberArea(memberAreas.DISPLAY);
  };

  return (
    <div>
      <div className="team-container">
        {teamMembers.map((mem) => (
          <div
            key={mem.id}
            className={
              "team-member " +
              (mem.id === user.id ? " me" : "") +
              (mem === selectedMember ? " selected" : "")
            }
            onClick={() =>
              memberArea !== memberAreas.FORM && handleMemberSelect(mem)
            }
          >
            {mem.name}
          </div>
        ))}
      </div>
      {memberArea === memberAreas.FORM && (
        <TeamMemberForm
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          onSuccess={handleAddUpdateTeamMember}
          onCancel={handleCancel}
        />
      )}
      {memberArea === memberAreas.DISPLAY && (
        <TeamMemberDisplay
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          isEditable={user.isTeamLeader}
          onEdit={handleEditMemberInfo}
          onCancel={handleCancel}
        />
      )}
      {!memberArea && (
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
