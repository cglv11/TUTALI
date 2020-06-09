const express = require('express');
const router = express.Router();

const Product = require('../models/product'); // contain scheme of produc

router.get('/', async (req, res) => {
  const products = await Product.find();
  console.log(products);
   res.render("index", {
     products
   }); // read products scheme and pass to html
});

router.get('/turn/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  product.status = !product.status;
  await product.save();
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const {id} = req.params;
  await Product.remove({_id: id});
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('edit', {
    product
  });// read id product and pass to edit html
});

router.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  await Product.update({_id: id}, req.body);
  res.redirect('/');
});

router.post('/add', async (req, res) => {
  const product = new Product(req.body); // create a new product
  await product.save();
  res.redirect('/');
});

module.exports = router;
