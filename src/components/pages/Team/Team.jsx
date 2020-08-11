import React from 'react';
import { teamApi } from '../../../shared/apis';
import { useAuth } from '../../../shared/hooks';
import './Team.css';
import { useState } from 'react';
import TeamMemberForm from '../../features/Team/TeamMemberForm';
import TeamMemberDisplay from '../../features/Team/TeamMemberDisplay';

const roles = [
  { value: 'tl', name: 'Team Leader' },
  { value: 'fed', name: 'Frontend Developer' },
  { value: 'bed', name: 'Backend Developer' },
  { value: 'dbd', name: 'Database Developer' },
  { value: 'tt', name: 'Tester' },
];

const genders = [
  { value: 'm', name: 'Male' },
  { value: 'f', name: 'Female' },
];

const Team = () => {
  const { user } = useAuth();
  const teamMembers = teamApi.getActiveTeamMembers(user.team);

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

  const handleAddUpdateTeamMember = (memberInfo) => {
    if (!memberInfo.id && memberInfo.id !== 0) {
      return teamApi.addTeamMember(user.team, memberInfo);
    }

    return teamApi.updateTeamMember(memberInfo);
  };

  return (
    <div>
      <div className='team-container'>
        {teamMembers.map((mem) => (
          <div
            key={mem.id}
            className={'team-member ' + (mem.id === user.id && ' me')}
            onClick={() => !showMemberForm && handleMemberSelect(mem)}
          >
            {mem.name}
          </div>
        ))}
      </div>
      {showMemberForm && (
        <TeamMemberForm
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          onSuccess={handleAddUpdateTeamMember}
          onCancel={handleCancel}
        />
      )}
      {showMemberInfo && (
        <TeamMemberDisplay
          teamMember={selectedMember}
          roles={roles}
          genders={genders}
          isEditable={user.isTeamLeader}
          onEdit={handleEditMemberInfo}
          onCancel={handleCancel}
        />
      )}
      {!showMemberForm && !showMemberInfo && (
        <input type='button' value='Add team member' onClick={() => setShowMemberForm(true)} />
      )}
    </div>
  );
};

export default Team;
