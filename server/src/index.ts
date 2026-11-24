import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
app.use(cors({ 
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
const PORT = process.env.PORT || 4000;

app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({status: 'ok', service: 'bit-api'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});