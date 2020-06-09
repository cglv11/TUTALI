const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema ({
  name: String,
  adress: String,
  quantity: Number,
  description: String,
  emailStore: String
});

module.exports = mongoose.model('store', StoreSchema);
