const express = require("express");
const { postProducts, productGetWithId } = require("../controller/product.controller");

const categoryS = express.Router();

// categoryS.get("/", productGet);
categoryS.get("/", productGetWithId);
categoryS.post("/post", postProducts);

module.exports = categoryS;
