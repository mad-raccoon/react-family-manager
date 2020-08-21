import { usersBE } from "../fixtures";

export const getActiveTeamMembers = (teamId) => {
  return usersBE.getUsersByTeamId(teamId);
};

export const getHistoryTeamMembers = (teamId) => {
  return usersBE.getAllUsersByTeamId(teamId);
};

export const addTeamMember = (teamId, member) => {
  usersBE.createUser({ ...member, teamId: teamId });
};

export const updateTeamMember = (member) => {
  usersBE.updateUser(member);
};

export const removeTeamMember = (memberId) => {
  usersBE.removeUser(memberId);
};
