import express from 'express';
import { router as quotesRouter } from './routes/quotes';

const app = express();

// API routes
app.use('/api/random-quote', quotesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
