// const express = require("express");
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 9000;
app.use(express.json()); //inbuilt middleware//interceptor//converting body to json

const products = [
  {
    createdAt: "2023-04-03T13:54:19.653Z",
    name: "Rustic Metal Gloves",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: 471,
    unitsAvailable: 7,
    productImage: "https://loremflickr.com/640/480/food",
    id: "20",
    category: "Tools",
  },
  {
    createdAt: "2023-04-03T14:41:02.813Z",
    name: "Oriental Plastic Pizza",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: 298,
    unitsAvailable: 19,
    productImage: "https://loremflickr.com/640/480/food",
    id: "21",
    category: "Tech",
  },

  {
    createdAt: "2023-04-09T15:22:11.188Z",
    name: "Rustic Soft Computer",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: 146,
    unitsAvailable: 99,
    productImage: "https://loremflickr.com/640/480/food",
    id: "24",
    category: "Tech",
  },
  {
    createdAt: "2023-04-09T18:00:29.779Z",
    name: "Recycled Soft Chips",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: 6,
    unitsAvailable: 6,
    productImage: "https://loremflickr.com/640/480/food",
    id: "25",
    category: "Food",
  },
  {
    createdAt: "2023-04-09T17:02:48.754Z",
    name: "Practical Granite Tuna",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: 109,
    unitsAvailable: 20,
    productImage: "https://loremflickr.com/640/480/food",
    id: "26",
    category: "Tools",
  },
  {
    createdAt: "2023-04-10T07:01:02.764Z",
    name: "Refined Granite Tuna",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: 702,
    unitsAvailable: 98,
    productImage: "https://loremflickr.com/640/480/food",
    id: "27",
    category: "Food",
  },
  {
    createdAt: "2023-04-18T20:42:28.028Z",
    name: "Small Wooden Sausages",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: 199,
    unitsAvailable: 43,
    productImage: "https://loremflickr.com/640/480/food",
    id: "28",
    category: "Tools",
  },
];

const MONGO_URL = "mongodb://0.0.0.0:27017";

//mongodb connection
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDb Connected");
  return client;
}

const client = await createConnection();

//REST API endpoints
app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳");
});

//get all products
//Task
// /products - get all products ✅
// /products?category=Tools - get only Tools product ✅
// /products?category=Tools&price=500 - filter by category and price ✅
// /products?price=500  - only products based on price ✅

app.get("/products", async (req, res) => {
  let {} = req.query;
  let category = req.query.category;
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let sort = { price: 1 };
  // let filteredProducts = products;
  // if (category) {
  //   filteredProducts = products.filter((pd) => pd.category == category);
  // }
  // if (lcost && hcost) {
  //   filteredProducts = products.filter(
  //     (pd) => pd.price >= lcost && pd.price <= hcost
  //   );
  // }
  if (req.query.sort) {
    sort = { price: req.query.sort };
  }
  if (category) {
    req.query = { category: category };
  }
  if (lcost && hcost) {
    req.query = { $and: [{ price: { $gt: lcost, $lt: hcost } }] };
  }
  if (category && lcost && hcost) {
    req.query = {
      category: category,
      $and: [{ price: { $gt: lcost, $lt: hcost } }],
    };
  }

  //else if (category && lcost && hcost) {
  //   req.query = {
  //     $and: [{ category: category }, { price: { $gt: lcost, $lt: hcost } }],
  //   };
  // }
  const products = await client
    .db("b45-wd")
    .collection("products")
    .find(req.query)
    .sort(sort)
    .toArray();
  res.send(products);
});

//get product by Id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  //db.products.findOne({id:"20"})
  // const product = products.find((pd) => pd.id == id);
  const product = await client
    .db("b45-wd")
    .collection("products")
    .findOne({ id: id });
  product
    ? res.send(product)
    : res.status(404).send({ message: "Product Not Found" });
});

//delete product by Id
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  //db.products.findOne({id:"20"})
  // const product = products.find((pd) => pd.id == id);
  const product = await client
    .db("b45-wd")
    .collection("products")
    .deleteOne({ id: id });
  res.send(product);
});

//add products
//inbuilt middleware
//say data is in json
app.post("/products", async (req, res) => {
  const newProduct = req.body;
  const result = await client
    .db("b45-wd")
    .collection("products")
    .insertMany(newProduct);
  res.send(result);
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
