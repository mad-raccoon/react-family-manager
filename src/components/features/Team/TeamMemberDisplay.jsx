import React from 'react';

const FamilyMemberDisplay = ({ teamMember, roles, genders, isEditable, onCancel, onEdit }) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <label>Name</label>
          <br />
          <input disabled value={teamMember.name} />
          <br />
          <label>Email</label>
          <br />
          <input disabled value={teamMember.email} />
        </div>
        <div>
          <label>Gender</label>
          <br />
          <input disabled value={genders.find((gen) => gen.value === teamMember.gender).name} />
          <br />
          <label>Role</label>
          <br />
          <select value={teamMember.role} disabled>
            <option value=''></option>
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {isEditable && <input type='button' value='Edit' onClick={onEdit} />}
        <input type='button' value='Cancel' onClick={onCancel} />
      </div>
    </>
  );
};

export default FamilyMemberDisplay;
