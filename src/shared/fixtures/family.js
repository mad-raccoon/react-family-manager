const families = [
  {
    id: "0",
    members: [
      {
        id: "0",
        name: "user0",
        email: "user0@mail.com",
        birthDate: "01/01/2010",
      },
      {
        id: "1",
        name: "user1",
        email: "user1@mail.com",
        birthDate: "01/01/2010",
      },
      {
        id: "2",
        name: "user2",
        email: "user2@mail.com",
        birthDate: "01/01/2010",
      },
      {
        id: "3",
        name: "user3",
        email: "user0@mail.com",
        birthDate: "01/01/2010",
      },
    ],
  },
];

export const getFamilyMembersByFamilyId = (familyId) => {
  return families.find((fam) => fam.id === familyId).members || null;
};
