import Product from '../../../../server/models/Product';
import { connectDB } from '../../../../server/utils/connectDB';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;

    default:
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      msg: 'success',
      result: products.length,
      products,
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
};
