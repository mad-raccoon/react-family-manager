const users = [
  {
    id: 0,
    email: "rui@mail.com",
    name: "Rui Ribeiro",
    gender: "m",
    role: "tl",
    team: 0,
    isTeamLeader: true,
    isActive: true,
  },
  {
    id: 1,
    email: "nuno@mail.com",
    name: "Nuno Simoes",
    gender: "m",
    role: "bed",
    team: 1,
    isActive: true,
  },
  {
    id: 2,
    email: "martim@mail.com",
    name: "Martim Matos",
    gender: "m",
    role: "fed",
    team: 0,
    isActive: true,
  },
  {
    id: 3,
    email: "telma@mail.com",
    name: "Telma Fernandes",
    gender: "f",
    role: "dbd",
    team: 0,
    isActive: true,
  },
  {
    id: 4,
    email: "tania@mail.com",
    name: "Tania Afonso",
    gender: "f",
    role: "dbd",
    team: 1,
    isActive: true,
  },
  {
    id: 5,
    email: "miguel@mail.com",
    name: "Miguel Gil",
    gender: "m",
    role: "bed",
    team: 1,
    isActive: true,
  },
  {
    id: 6,
    email: "marta@mail.com",
    name: "Marta Marques",
    gender: "f",
    role: null,
    team: 0,
    isActive: true,
  },
];

export const getUserByEmail = (email) =>
  users.find((user) => user.email === email);

const userCredentials = [
  { email: "rui@mail.com", password: "user" },
  { email: "martim@mail.com", password: "user" },
];

export const getUserCredentialsConfirmation = (email, password) =>
  userCredentials.some(
    (user) => user.email === email && user.password === password
  );

export const getUsersByTeamId = (teamId) =>
  users.filter((user) => user.team === teamId && user.isActive);

export const getAllUsersByTeamId = (teamId) =>
  users.filter((user) => user.team === teamId);

export const createUser = (user) => {
  users.push({ ...user, id: users.length, isActive: true });
};

export const updateUser = (user) => {
  const index = users.findIndex(function (o) {
    return o.id === user.id;
  });
  users[index] = Object.assign(users[index], user);
};

export const removeUser = (userId) => {
  const index = users.findIndex(function (o) {
    return o.id === userId;
  });

  users[index].isActive = false;
};
