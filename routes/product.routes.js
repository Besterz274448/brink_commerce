const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// @route   GET /product
// @desc    GET ALL PRODUCT ITEMS
// @access  Public
router.get("/", async (req, res) => {
  try {
    let product = await Product.find();
    res.status(200).json(product);
  } catch (e) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let product = await Product.findOne({_id:id},(err,item)=>{
      if(err){
        res.status(200).json({message:"item not found"});
      }
      return item;
    });
    res.status(200).json(product);
  } catch (e) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
