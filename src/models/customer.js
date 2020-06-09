const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    adress: String,
    emailCustomer: String,
});

module.exports = mongoose.model('customer', CustomerSchema);
