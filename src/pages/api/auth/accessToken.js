import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../../../server/models/User';
import {
  createAccessToken,
  createRefreshToken,
} from '../../../../server/utils/generateToken';

const { connectDB } = require('../../../../server/utils/connectDB');

connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ msg: 'Please login now!' });

    const result = await jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(400)
        .json({ msg: 'Your token is Incorrect or has expired.' });

    const user = await User.findById(result.id);
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const access_token = createAccessToken({ id: user.id });
    res.json({
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
    return res.status(500).send('Server error');
  }
};
