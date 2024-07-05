"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const quotes_1 = require("./routes/quotes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/quotes', quotes_1.router);
// Serve static files from Angular's dist directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../../fortune-cookie-frontend/dist/fortune-cookie-frontend/browser')));
// Send all other requests to Angular's index.html
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../fortune-cookie-frontend/dist/fortune-cookie-frontend/browser/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
