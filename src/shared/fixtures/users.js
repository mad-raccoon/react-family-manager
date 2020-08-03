const users = [
  { id: 0, email: 'user0@test.com', name: 'user0' },
  { id: 1, email: 'user1@test.com', name: 'user1' },
  { id: 2, email: 'user2@test.com', name: 'user2' },
];

export const getUserByEmail = (email) => users.find((user) => user.email === email);

const userCredentials = [
  { email: 'user0@test.com', password: 'user0' },
  { email: 'user1@test.com', password: 'user1' },
  { email: 'user2@test.com', password: 'user2' },
];

export const getUserCredentialsConfirmation = (email, password) =>
  userCredentials.some((user) => user.email === email && user.password === password);
