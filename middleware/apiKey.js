import dotenv from 'dotenv';
dotenv.config();

export function apiKeyMiddleware(req, res, next) {
  const clientKey = req.headers['x-api-key'];

  if (!clientKey) {
    return res.status(401).json({ success: false, message: "Missing API key" });
  }

  if (clientKey !== process.env.API_KEY) {
    return res.status(403).json({ success: false, message: "Invalid API key" });
  }

  next();
}
