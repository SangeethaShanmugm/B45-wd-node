import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genPassword, createUser, getUserByName } from "../helper.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);
  if (isUserExist) {
    res.status(400).send({ message: "Username already taken" });
    return;
  }
  if (
    !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[_#!@%&]).{8,}$/g.test(
      password
    )
  ) {
    res.status(400).send({ message: "Password pattern doesn't match" });
    return;
  }
  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if (!userFromDB) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  const storedDbPassword = userFromDB.password;
  console.log(storedDbPassword);
  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
  if (!isPasswordMatch) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);

  res.send({ message: "Successfully Logged In", token: token });
});
export const usersRouter = router;

//validate if username already present
//validate if password matches
