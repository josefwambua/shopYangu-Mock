import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { title, category, image, description, price } = req.body;

      if (!title || !category || !image || !description || !price) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const product = new Product({ title, category, image, description, price });
      await product.save();

      return res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
