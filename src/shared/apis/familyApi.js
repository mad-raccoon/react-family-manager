import { getFamilyMembersByFamilyId } from "../fixtures/family";

export const getFamilyMembers = (familyId) => {
  return getFamilyMembersByFamilyId(familyId);
};
