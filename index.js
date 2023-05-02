// const express = require("express");
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { productsRouter } from "./routes/products.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
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
//console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;
// "mongodb://0.0.0.0:27017";

//mongodb connection
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDb Connected");
  return client;
}

export const client = await createConnection();

//REST API endpoints
app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳");
});

app.use("/products", productsRouter);

app.listen(PORT, () => console.log("Server started on port ", PORT));
