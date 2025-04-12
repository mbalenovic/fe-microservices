import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 4000;
const SECRET = "supersecret";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/healthz", (_, res) => {
  res.status(200).json({ message: "OK" });
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ success: true });
});

app.get("/me", (req, res) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, SECRET);
    res.json(user);
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
