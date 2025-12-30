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

x-api-key: YOUR_API_KEY

kotlin
Copy code

Requests without this header will return:

```json
{
  "success": false,
  "message": "Missing API key"
}
📌 Base URL
arduino
Copy code
http://<YOUR_SERVER_IP>:3000/api/canvas
Example (production):

arduino
Copy code
http://194.146.38.147:3000/api/canvas
🎯 Single Track Endpoint
GET /api/canvas
Query Parameters
Name	Type	Required	Description
trackId	string	✅ Yes	Spotify track ID

Example Request
bash
Copy code
curl "http://194.146.38.147:3000/api/canvas?trackId=0VjIjW4GlUZAMYd2vXMi3b" \
  -H "x-api-key: YOUR_API_KEY"
Example Response (Canvas available)
json
Copy code
{
  "success": true,
  "data": {
    "canvasesList": [
      {
        "canvasUrl": "https://canvaz.scdn.co/upload/...mp4",
        "trackUri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
        "artist": {
          "artistName": "The Weeknd"
        }
      }
    ]
  }
}
Example Response (No Canvas)
json
Copy code
{
  "success": true,
  "data": {
    "canvasesList": []
  }
}
📦 Batch Track Endpoint
GET /api/canvas/batch
Fetch Canvas data for multiple Spotify tracks in one request.

Query Parameters
Name	Type	Required	Description
ids	string	✅ Yes	Comma-separated Spotify track IDs

Example Request
bash
Copy code
curl "http://194.146.38.147:3000/api/canvas/batch?ids=0VjIjW4GlUZAMYd2vXMi3b,5aAx2yezTd8zXrkmtKl66Z" \
  -H "x-api-key: YOUR_API_KEY"
Example Response (Clean Array Format)
json
Copy code
{
  "success": true,
  "count": 2,
  "results": [
    {
      "trackId": "0VjIjW4GlUZAMYd2vXMi3b",
      "canvasesList": [
        {
          "canvasUrl": "https://canvaz.scdn.co/upload/...mp4",
          "artist": {
            "artistName": "The Weeknd"
          }
        }
      ]
    },
    {
      "trackId": "5aAx2yezTd8zXrkmtKl66Z",
      "canvasesList": []
    }
  ]
}
🧠 Important Notes About Canvas Availability
Spotify Canvas is not available for all tracks

Many songs have multiple versions (album, clean, lyric, regional)

One version may have Canvas while another does not

Always query the exact track ID from Spotify

An empty canvasesList means no Canvas exists for that track ID.

🧰 Bubble.io Integration
This API is compatible with the Bubble API Connector.

Setup
Method: GET

URL:

ruby
Copy code
http://194.146.38.147:3000/api/canvas/batch?ids=<dynamic_ids>
Headers:

css
Copy code
x-api-key: YOUR_API_KEY
Bubble can loop over results using:

vbnet
Copy code
results:each item
🛠 Tech Stack
Node.js (ES Modules)

Express.js

Axios

Google Protobuf

Spotify internal Canvas endpoints

📄 License
MIT License

✨ Author
Atharva Deshmukh

Backend API developed for production use and client integration.
