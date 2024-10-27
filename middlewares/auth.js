const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const [secretWithTime, datetime] = token.split(",");

    if (!secretWithTime || !datetime) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const serverSecret = process.env.SECRET;
    const clientSecret = secretWithTime.trim();
    const tokenTime = parseInt(datetime.trim(), 10);

    if (clientSecret !== serverSecret) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const timeDifference = currentTime - tokenTime;

    if (timeDifference > 3600) {
      return res.status(401).json({ message: "Token expired" });
    }

    if (timeDifference < 0) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    next(); // User is authorized, proceed to the next middleware
  } catch (error) {
    console.error("Token validation failed:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
