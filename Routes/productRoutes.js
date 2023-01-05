const router = require("express").Router();
const {
  createProduct,
  getProductDetails,
} = require("../Controllers/productController");

router.route("/create").post(createProduct);
router.route("/getdetail/:id").get(getProductDetails);


module.exports = router;
