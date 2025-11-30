require("dotenv").config();
const axios = require("axios");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User.cjs");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/heritageUsers")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET;

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );

  return response.data.success;
}

app.post("/signup", async (req, res) => {
  const { name, passwd, email, mobileno } = req.body;

  const isValid = await verifyCaptcha(captcha);
  if (!isValid) {
    return res.json({ success: false, message: "Captcha failed!" });
  }
  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Email already registered!" });
    }

    await User.create({ name, passwd, email, mobileno });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: "Server error" });
  }
});


app.post("/login", async (req, res) => {
  const { name, passwd, captcha } = req.body;

  const isValid = await verifyCaptcha(captcha);
  if (!isValid) {
    return res.json({ success: false, message: "Captcha failed!" });
  }

  try {
    const user = await User.findOne({ name, passwd });
    if (!user) {
      return res.json({ success: false });
    }

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
