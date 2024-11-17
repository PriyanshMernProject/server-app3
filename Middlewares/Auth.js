import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header.authorization;
    if (!token) {
      res.status(400).json("Access denied");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
