const express = require("express");
const app = express();
const PORT = 9000;
// req => what you send/request to Server
// res => what you receive from Server

const products = [
  {
    createdAt: "2023-04-03T13:54:19.653Z",
    name: "Rustic Metal Gloves",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: "471.00",
    unitsAvailable: 7,
    productImage: "https://loremflickr.com/640/480/food",
    id: "20",
  },
  {
    createdAt: "2023-04-03T14:41:02.813Z",
    name: "Oriental Plastic Pizza",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: "298.00",
    unitsAvailable: 19,
    productImage: "https://loremflickr.com/640/480/food",
    id: "21",
  },
  {
    createdAt: "2023-04-04T02:19:45.142Z",
    name: "",
    description: "",
    price: 0,
    unitsAvailable: 0,
    productImage: "",
    id: "22",
  },
  {
    createdAt: "2023-04-04T01:18:37.281Z",
    name: "",
    description: "",
    price: 0,
    unitsAvailable: 0,
    productImage: "",
    id: "23",
  },
  {
    createdAt: "2023-04-09T15:22:11.188Z",
    name: "Rustic Soft Computer",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: "146.00",
    unitsAvailable: 99,
    productImage: "https://loremflickr.com/640/480/food",
    id: "24",
  },
  {
    createdAt: "2023-04-09T18:00:29.779Z",
    name: "Recycled Soft Chips",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: "6.00",
    unitsAvailable: 6,
    productImage: "https://loremflickr.com/640/480/food",
    id: "25",
  },
  {
    createdAt: "2023-04-09T17:02:48.754Z",
    name: "Practical Granite Tuna",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: "109.00",
    unitsAvailable: 20,
    productImage: "https://loremflickr.com/640/480/food",
    id: "26",
  },
  {
    createdAt: "2023-04-10T07:01:02.764Z",
    name: "Refined Granite Tuna",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: "702.00",
    unitsAvailable: 98,
    productImage: "https://loremflickr.com/640/480/food",
    id: "27",
  },
  {
    createdAt: "2023-04-18T20:42:28.028Z",
    name: "Small Wooden Sausages",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: "199.00",
    unitsAvailable: 43,
    productImage: "https://loremflickr.com/640/480/food",
    id: "28",
  },
];

//REST API endpoints
app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳");
});

//get all products

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
