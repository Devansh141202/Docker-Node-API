const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    reqiured: true,
  },
  description:{
    type:String,
    reqiured:true
  }
});

// const productModel = mongoose.model("Product", productSchema);
// module.exports = productModel;
module.exports = mongoose.model("Product", productSchema);
