import React from "react";
import { familyApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";
import "./Family.css";
import { useState } from "react";
import FamilyMemberForm from "../../features/Family/FamilyMemberForm";

const Family = () => {
  const { user } = useAuth();
  const familyMembers = familyApi.getFamilyMembers("0");

  const [selectedMember, setSelectedMember] = useState(null);
  const [showMemberForm, setShowMemberForm] = useState(false);

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setShowMemberForm(true);
  };

  return (
    <div>
      <div className="family-container">
        {familyMembers.map((mem) => (
          <div
            className={"family-member " + (mem.id === user.id && " me")}
            onClick={() => handleMemberSelect(mem)}
          >
            {mem.name}
          </div>
        ))}
      </div>
      {showMemberForm && (
        <FamilyMemberForm
          memberInfo={selectedMember}
          isEditable={selectedMember.id === user.id}
        />
      )}
      <input
        type="button"
        value="Add family member"
        onClick={() => setShowMemberForm(true)}
      />
    </div>
  );
};

export default Family;
