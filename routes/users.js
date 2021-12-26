import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "alok",
    lastName: "gupta",
    city: "BLR"
  },
  {
    firstName: "pradeep",
    lastName: "royal",
    city: "HYD"
  }
]

// all routes here start with /users
router.get('/', (req, res) => {
  res.send(users);
})

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`New user ${user.firstName} added to the list`);
})

export default router;