const {
  postProduct,
  getQueryProduct,
} = require("../services/product.services");


//  find product with id
module.exports.productGetWithId = async (req, res, next) => {
  const price = req.query.price;
  const category = req.query.category;
  const id = req.query.id;
  const currentPage  = parseInt(req.query.page) || 1
  const result = await getQueryProduct(price ,category,id,currentPage);
  res.status(299).send({ length: result.length, data: result });
};

//post products
module.exports.postProducts = async (req, res, next) => {
  const data = req.body;
  const result = await postProduct(data);
  res.send(result);
};
