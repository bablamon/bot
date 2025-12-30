Spotify Canvas Detector API

A production-ready Node.js backend service to detect and fetch Spotify Canvas video URLs for tracks, with support for single and batch requests.

This API is designed to be consumed by frontend apps, no-code tools (like Bubble.io), and backend services.

🚀 Features

Fetch Spotify Canvas videos by track ID

Batch support for multiple tracks in one request

Clean, predictable array-based JSON output

API key–protected endpoints

Works with public Spotify tracks

Bubble.io / no-code friendly response format

⚠️ Disclaimer

This project uses undocumented Spotify internal endpoints.
Spotify Canvas availability depends on region and specific track versions.

If a track does not have a Canvas, the API will return an empty list for that track.

Use at your own risk.

🔐 Authentication

All endpoints require an API key.

Required HTTP Header
x-api-key: YOUR_API_KEY


Requests without this header will return:

{
  "success": false,
  "message": "Missing API key"
}

📌 Base URL
http://<YOUR_SERVER_IP>:3000/api/canvas


Example (production):

http://194.146.38.147:3000/api/canvas

🎯 Single Track Endpoint
GET /api/canvas
Query Parameters
Name	Type	Required	Description
trackId	string	✅ Yes	Spotify track ID
Example Request
curl "http://194.146.38.147:3000/api/canvas?trackId=0VjIjW4GlUZAMYd2vXMi3b" \
  -H "x-api-key: YOUR_API_KEY"

Example Response
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


If no Canvas is available:

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
curl "http://194.146.38.147:3000/api/canvas/batch?ids=0VjIjW4GlUZAMYd2vXMi3b,5aAx2yezTd8zXrkmtKl66Z" \
  -H "x-api-key: YOUR_API_KEY"

Example Response (Clean Array Format)
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

Notes

Each item in the array represents one track

canvasesList is empty if Spotify does not provide a Canvas for that track

No dynamic object keys → easy to parse in Bubble.io

🧠 Important Notes About Canvas Availability

Spotify Canvas is not available for all tracks

Some songs have multiple versions (album, clean, lyric, regional)

One version may have Canvas while another does not

Always use the exact track ID from Spotify

🧰 Bubble.io Integration

This API is compatible with Bubble API Connector.

Setup

Method: GET

URL:

http://194.146.38.147:3000/api/canvas/batch?ids=<dynamic_ids>


Header:

x-api-key: YOUR_API_KEY


Bubble can easily loop over:

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
