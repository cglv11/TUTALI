const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  status: {
    type: Boolean,
    default: false
  },
  quantity: Number,
  image: String
});

module.exports = mongoose.model('products', ProductSchema);
