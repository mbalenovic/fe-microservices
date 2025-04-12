import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken";

const app = express();
const PORT = 4000;
const SECRET = "supersecret";

// Authorization middleware
const authorize = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, SECRET);
    req.user = user as JwtPayload;
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
};

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

app.get("/me", authorize, (req, res) => {
  res.json(req.user);
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
