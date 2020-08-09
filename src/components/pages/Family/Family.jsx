import React from "react";
import { familyApi, userApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";
import "./Family.css";
import { useState } from "react";
import FamilyMemberForm from "../../features/Family/FamilyMemberForm";
import FamilyMemberDisplay from "../../features/Family/FamilyMemberDisplay";

const Family = () => {
  const { user } = useAuth();
  const familyMembers = familyApi.getFamilyMembers(user.familyId);

  const [selectedMember, setSelectedMember] = useState(null);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [showMemberInfo, setShowMemberInfo] = useState(false);

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setShowMemberInfo(true);
  };

  const handleEditMemberInfo = () => {
    setShowMemberInfo(false);
    setShowMemberForm(true);
  };

  const handleCancel = () => {
    setSelectedMember(null);
    setShowMemberInfo(false);
    setShowMemberForm(false);
  };

  const handleAddUpdateFamilyMember = (memberInfo) => {
    familyApi.addUpdateFamilyMember(user.familyId, memberInfo);
  };

  return (
    <div>
      <div className="family-container">
        {familyMembers.map((mem) => (
          <div
            className={"family-member " + (mem.id === user.id && " me")}
            onClick={() => !showMemberForm && handleMemberSelect(mem)}
          >
            {mem.name}
          </div>
        ))}
      </div>
      {showMemberForm && (
        <FamilyMemberForm
          familyMember={selectedMember}
          onSuccess={handleAddUpdateFamilyMember}
          onCancel={handleCancel}
        />
      )}
      {showMemberInfo && (
        <FamilyMemberDisplay
          familyMember={selectedMember}
          isEditable={user.id === selectedMember.id}
          onEdit={handleEditMemberInfo}
          onCancel={handleCancel}
        />
      )}
      {!showMemberForm && !showMemberInfo && (
        <input
          type="button"
          value="Add family member"
          onClick={() => setShowMemberForm(true)}
        />
      )}
    </div>
  );
};

export default Family;
