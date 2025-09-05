const express = require("express");
const app = express();

app.use(express.json());

// Homepage
app.get("/", (req, res) => {
  res.send("📧 Temp Mail 10 Min Service is live 24/7 on Render!");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date() });
});


// Example route: generate temp email
app.get("/new-email", (req, res) => {
  const random = Math.random().toString(36).substring(2, 10);
  res.json({ email: `${random}@tempmail10min.com` });
});

// Example route: inbox (dummy)
app.get("/inbox", (req, res) => {
  res.json({ messages: ["Welcome to Temp Mail!"] });
});


// Render requires PORT from environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ temp-mail-10mincom running on port ${PORT}`));
