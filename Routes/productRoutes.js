const router = require("express").Router();
const {
  createProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");

router.route("/create").post(createProduct);
router.route("/getdetail/:id").get(getProductDetails);
router.route("/update/:id").put(updateProduct);
router.route("/delete/:id").delete(deleteProduct);

module.exports = router;
