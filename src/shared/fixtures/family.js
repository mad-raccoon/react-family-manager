const families = [
  {
    id: "0",
    members: [
      {
        id: "0",
        name: "user0",
        email: "user0@mail.com",
        birthDate: "01/01/2010",
        gender: "m",
      },
      {
        id: "1",
        name: "user1",
        email: "user1@mail.com",
        birthDate: "01/01/2010",
        gender: "m",
      },
      {
        id: "2",
        name: "user2",
        email: "user2@mail.com",
        birthDate: "01/01/2010",
        gender: "f",
      },
      {
        id: "3",
        name: "user3",
        email: "user0@mail.com",
        birthDate: "01/01/2010",
        gender: "m",
      },
    ],
  },
];

export const getFamilyMembersByFamilyId = (familyId) => {
  return families.find((fam) => fam.id === familyId).members || null;
};

export const addUpdateFamilyMemberToFamilyId = (familyId, familyMember) => {
  if (familyMember.id) {
    const index = families
      .find((fam) => fam.id === familyId)
      .members.findIndex(function (o) {
        return o.id === familyMember.id;
      });

    families.find((fam) => fam.id === familyId).members.splice(index, 1);
  }

  families.find((fam) => fam.id === familyId).members.push(familyMember);
};
