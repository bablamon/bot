import express from 'express';
import axios from 'axios';
import canvasRoutes from './routes/canvasRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 3000;

app.use('/api/canvas', canvasRoutes);

app.listen(PORT, "0.0.0.0", function () {
    console.log("Listening on PORT:", PORT);
    console.log(`Running locally:  http://localhost:${PORT}`);
    console.log(`LAN access:      http://192.168.1.6:${PORT}`);
});
