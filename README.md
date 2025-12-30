# 🎵 Spotify Canvas Detector API

A production-ready Node.js backend service to detect and fetch **Spotify Canvas video URLs** for tracks, with support for **single and batch requests**.

This API is designed to be consumed by frontend apps, backend services, and **no-code platforms like Bubble.io**, with a clean and predictable response format.

---

## 🚀 Features

- Fetch Spotify Canvas videos by track ID  
- Batch support for multiple tracks in one request  
- Clean array-based JSON output (no dynamic keys)  
- API key–protected endpoints  
- Bubble.io / no-code friendly  
- Works with public Spotify tracks  

---

## ⚠️ Disclaimer

This project uses **undocumented Spotify internal endpoints**.  
Spotify Canvas availability depends on **region and specific track versions**.

If a track does not have a Canvas, the API will return an empty list for that track.

Use at your own risk.

---

## 🔐 Authentication

All endpoints require an API key.

### Required HTTP Header

