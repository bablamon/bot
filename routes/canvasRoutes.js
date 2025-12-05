import express from 'express';
import { fetchCanvas } from '../controllers/canvasController.js';
import { getCanvases } from '../services/spotifyCanvasService.js';

const router = express.Router();

// SINGLE TRACK
router.get('/', fetchCanvas);

// BATCH TRACKS: ?ids=ID1,ID2,ID3
router.get('/batch', async (req, res) => {
  const { ids } = req.query;

  if (!ids) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing ids parameter. Example: /api/canvas/batch?ids=A,B,C' 
    });
  }

  const trackIds = ids.split(',');
  const results = {};

  for (let id of trackIds) {
    try {
      const data = await getCanvases(`spotify:track:${id}`);
      results[id] = data || null;
    } catch (err) {
      results[id] = { error: true, message: err.message };
    }
  }

  res.json({
    success: true,
    count: trackIds.length,
    results
  });
});

export default router;
