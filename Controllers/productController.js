const Product = require("../Models/productsModel");

exports.createProduct = async (req, res) => {
  const product = await Product.findOne(req.params.id);
  if (!product) {
    return res.status(400).send({ message: "Product found" });
  }
  // const { name, price, description } = req.body;
  const newProduct = await Product.create(req.body);
  res.status(200).json({
    success: true,
    message: "Product Created",
  });
};















exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(400).send({ message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    product,
  });
};
exports.updateProduct = async (req, res) => {
  let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    return res.status(400).send({ message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(400).send({ message: "Product not found" });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted",
  });
};
