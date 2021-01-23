import { connectDB } from '../../../../server/utils/connectDB';
// import User from '../../../../server/models/User';
import bcrypt from 'bcrypt';
import User from '../../../../server/models/User';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;

    default:
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    let newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    return res.status(200).json({ msg: 'Registration successful' });
  } catch (err) {
    // console.error(err.message);
    return res.status(500).send('Server Error');
  }
};
