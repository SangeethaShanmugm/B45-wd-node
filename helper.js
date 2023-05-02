import { client } from "./index.js";

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
