// middlewares/authSeller.js
import jwt from 'jsonwebtoken';

export const verifySellerToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    //console.log("Auth Header:", authHeader); // ✅ Logs before verification

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    //console.log("Token:", token); // ✅ See what you're decoding

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ❌ Crashes here if something is wrong
    //console.log("Decoded token:", decoded); // ❌ Not reached if verify fails

    req.seller = decoded;
    console.log(req.seller);
    next();

  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: " + err.message });
  }
};
