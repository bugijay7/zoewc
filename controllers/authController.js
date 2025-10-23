import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// You can store these credentials in MongoDB later if you want multiple admins.
// For now, let’s keep one admin in environment variables (.env)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL 
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ; 

// Hash the password once at startup
const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10);

// 🔐 Admin Login Controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate request
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // 2️⃣ Check if email matches admin
    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 3️⃣ Compare password
    const isMatch = bcrypt.compareSync(password, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 4️⃣ Generate JWT Token
    const token = jwt.sign(
      { email: ADMIN_EMAIL, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 5️⃣ Respond with token
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Note: In production, ensure to use HTTPS to protect token in transit.