import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const jwtToken = token.split(' ')[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.admin = decoded; 
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;
