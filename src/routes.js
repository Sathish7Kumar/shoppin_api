const express = require("express");
const shoppingModel = require("./model");

const router = express.Router();

// product post route
router.post("/post", async (req, res) => {
  try {
    const { title, image, price, desc, brand } = req.body;
    const newProduct = await shoppingModel({
      title,
      image,
      price,
      desc,
      brand,
    });
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.send(error);
  }
});

// get all products route
router.get("/products", async (req, res) => {
  try {
    const allProducts = await shoppingModel.find();
    res.send(allProducts);
  } catch (error) {
    res.send(error);
  }
});

// get selected products route
router.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const selectedProducts = await shoppingModel.findById(id);
    res.send(selectedProducts);
  } catch (error) {
    res.send(error);
  }
});

// edit selected products route
router.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, image, price, desc, brand } = req.body;
    const updatedProducts = await shoppingModel.findByIdAndUpdate(id, {
      title,
      image,
      price,
      desc,
      brand,
    });
    res.send({message : "product updated successfully"});
  } catch (error) {
    res.send(error);
  }
});

// delete selected products route
router.delete("/products/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await shoppingModel.findByIdAndDelete(id);
      res.send({message : "product deleted successfully"});
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;
