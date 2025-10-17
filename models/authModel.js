import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

// Load admin credentials from environment
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@zoeworship.org";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "zoeAdmin123";

// Hash the password when the server starts
const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10);

// Simple in-memory admin model (for single admin CMS)
const Admin = {
  email: ADMIN_EMAIL,
  password: hashedPassword,

  // Check credentials
  validateCredentials(email, password) {
    if (email !== this.email) return false;
    return bcrypt.compareSync(password, this.password);
  },
};

export default Admin;
