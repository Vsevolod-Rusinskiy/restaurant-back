require('dotenv').config();
const express = require('express');
import { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Restaurant Backend is Running');
});

// Подключаем маршрутизаторы



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
