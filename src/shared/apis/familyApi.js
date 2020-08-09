import {
  getFamilyMembersByFamilyId,
  addUpdateFamilyMemberToFamilyId,
} from "../fixtures/family";

export const getFamilyMembers = (familyId) => {
  return getFamilyMembersByFamilyId(familyId);
};

export const addUpdateFamilyMember = (userId, familyMember) => {
  return addUpdateFamilyMemberToFamilyId(userId, familyMember);
};
