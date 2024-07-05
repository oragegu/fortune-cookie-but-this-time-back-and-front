import express from 'express';
import path from 'path';
import { router as quotesRouter } from './routes/quotes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/quotes', quotesRouter);

// Serve static files from Angular's dist directory
app.use(express.static(path.join(__dirname, '../../fortune-cookie-frontend/dist/fortune-cookie-frontend/browser')));

// Send all other requests to Angular's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../fortune-cookie-frontend/dist/fortune-cookie-frontend/browser/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
