import { getCanvases } from '../services/spotifyCanvasService.js';

export const fetchCanvas = async (req, res) => {
  const { trackId } = req.query;

  if (!trackId) {
    return res.status(400).json({ success: false, message: 'Missing trackId parameter' });
  }

  const canvasData = await getCanvases(`spotify:track:${trackId}`);

  if (!canvasData) {
    return res.status(500).json({ success: false, message: 'Failed to fetch canvas data' });
  }

  res.json({ success: true, data: canvasData });
};
