import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import { Quote } from '../interfaces/quote.interface'; // Adjust the import path as necessary


const router = Router();

// Load quotes from JSON file
const quotesPath = path.join(__dirname, '../../public/quotes.json');
let quotes: Quote[] = [];

fs.readFile(quotesPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading quotes.json:', err);
    } else {
        quotes = JSON.parse(data);
    }
});

router.get('/', (req, res) => {
    if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        res.json(quotes[randomIndex]);
    } else {
        res.status(500).json({ error: 'No quotes available' });
    }
});

export { router };
