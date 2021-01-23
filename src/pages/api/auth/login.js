import bcrypt from 'bcrypt';
import User from '../../../../server/models/User';
import {
  createAccessToken,
  createRefreshToken,
} from '../../../../server/utils/generateToken';

const { connectDB } = require('../../../../server/utils/connectDB');

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;

    default:
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user) return res.status(400).json({ msg: 'User not found' });
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    return res.status(200).json({
      msg: `Welcome back! ${user.name}`,
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
};
