const express = require("express");
const { productGetWithId, postProducts } = require("../Controller/product.controller");


const categoryS = express.Router();

// categoryS.get("/", productGet);
categoryS.get("/", productGetWithId);
categoryS.post("/post", postProducts);

module.exports = categoryS;
