const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.send(products);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.json(product);
  });
};

exports.getCart = (req, res, next) => {};

exports.getOrders = (req, res, next) => {};

exports.getCheckout = (req, res, next) => {};
