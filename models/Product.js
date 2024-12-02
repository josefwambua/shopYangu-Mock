const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // Assuming the image will be a URL
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
