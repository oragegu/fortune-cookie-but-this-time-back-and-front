"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
exports.router = router;
// Load quotes from JSON file
const quotesPath = path_1.default.join(__dirname, '../../public/quotes.json');
let quotes = [];
fs_1.default.readFile(quotesPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading quotes.json:', err);
    }
    else {
        quotes = JSON.parse(data);
    }
});
router.get('/', (req, res) => {
    if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        res.json(quotes[randomIndex]);
    }
    else {
        res.status(500).json({ error: 'No quotes available' });
    }
});
