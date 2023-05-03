import { client } from "./index.js";
import bcrypt from "bcrypt";
export async function getAllProducts(req, sort) {
  return await client
    .db("b45-wd")
    .collection("products")
    .find(req.query)
    .sort(sort)
    .toArray();
}
export async function getProductById(id) {
  return await client.db("b45-wd").collection("products").findOne({ id: id });
}
export async function deleteProductById(id) {
  return await client.db("b45-wd").collection("products").deleteOne({ id: id });
}
export async function addProducts(newProduct) {
  return await client
    .db("b45-wd")
    .collection("products")
    .insertMany(newProduct);
}

export async function updateProductById(id, updatedProduct) {
  return await client
    .db("b45-wd")
    .collection("products")
    .updateOne({ id: id }, { $set: updatedProduct });
}

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); //bcrypt.genSalt(no. of rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b45-wd")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b45-wd")
    .collection("users")
    .findOne({ username: username });
}
