import express from "express";
import {
  getAllProducts,
  getProductById,
  deleteProductById,
  addProducts,
  updateProductById,
} from "../helper.js";
const router = express.Router();

//get all products
router.get("/", async (req, res) => {
  let {} = req.query;
  let category = req.query.category;
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let sort = { price: 1 };

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

  const products = await getAllProducts(req, sort);
  res.send(products);
});

//get product by Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await getProductById(id);
  product
    ? res.send(product)
    : res.status(404).send({ message: "Product Not Found" });
});

//delete product by Id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await deleteProductById(id);
  res.send(product);
});

//add products
//inbuilt middleware
//say data is in json
router.post("/", async (req, res) => {
  const newProduct = req.body;
  const result = await addProducts(newProduct);
  res.send(result);
});

//update products
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;

  const product = await updateProductById(id, updatedProduct);
  res.send(product);
});

export const productsRouter = router;
