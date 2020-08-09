import React from "react";

const FamilyMemberDisplay = ({
  familyMember,
  isEditable,
  onCancel,
  onEdit,
}) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <label>Name</label>
          <br />
          <input disabled value={familyMember.name} />
          <br />
          <label>Email</label>
          <br />
          <input disabled value={familyMember.email} />
        </div>
        <div>
          <label>Gender</label>
          <br />
          <select value={familyMember.gender} disabled>
            <option value=""></option>
            <option value="f">Female</option>
            <option value="m">Male</option>
          </select>
          <br />
          <label>Birth date</label>
          <br />
          <input disabled value={familyMember.birthDate} />
        </div>
      </div>
      <div>
        {isEditable && <input type="button" value="Edit" onClick={onEdit} />}
        <input type="button" value="Cancel" onClick={onCancel} />
      </div>
    </>
  );
};

export default FamilyMemberDisplay;
