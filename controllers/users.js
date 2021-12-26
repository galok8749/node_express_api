import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`New user ${user.firstName} added to the list`);
}

export const getUsers = (req, res) => {
  res.send(users);
}

export const getUser = (req, res) => {
  const {id} = req.params;

  const foundUser =  users.find((user) => user.id === id);
  res.send(foundUser);
}

export const deleteUser = (req, res) => {
  const {id} = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the ${id} deleted from the list`);
}

export const updateUser = (req, res) => {
  const {id} = req.params;
  const {firstName, lastName, city} = req.body;

  const user = users.find((user) => user.id === id);

  if(firstName) user.firstName = firstName;

  if(lastName) user.lastName = lastName;

  if(city) user.city = city;

  res.send(`user with the ${id} has been updated`);
}