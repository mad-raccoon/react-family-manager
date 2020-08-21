const roles = [
  { value: "tl", name: "Team Leader" },
  { value: "fed", name: "Frontend Developer" },
  { value: "bed", name: "Backend Developer" },
  { value: "dbd", name: "Database Developer" },
  { value: "tt", name: "Tester" },
];

const genders = [
  { value: "m", name: "Male" },
  { value: "f", name: "Female" },
];

const statuses = [
  { value: 0, name: "To do" },
  { value: 1, name: "In progress" },
  { value: 2, name: "Done" },
];

export const getRoles = () => {
  return roles;
};

export const getGenders = () => {
  return genders;
};

export const getStatuses = () => {
  return statuses;
};
