const express = require('express');
const router = express.Router();
const bookService = require('../services/bookService');
const requestService = require('../services/requestService');

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Book routes
router.post('/books', async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBook = await bookService.addBook(title, author);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Error adding book' });
    }
});

router.get('/books', (req, res) => {
    try {
        const books = bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error getting books' });
    }
});

// Add this search endpoint
router.get('/books/search', (req, res) => {
    try {
        const { title } = req.query;
        if (!title) {
            return res.status(400).json({ error: 'Title parameter is required' });
        }
        const book = bookService.searchBook(title);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error searching for book' });
    }
});

// Request routes
router.post('/requests', async (req, res) => {
    try {
        const { studentId, bookId } = req.body;
        const request = await requestService.addRequest(studentId, bookId);
        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ error: 'Error adding request' });
    }
});

router.get('/requests', (req, res) => {
    try {
        const requests = requestService.getAllRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Error getting requests' });
    }
});

module.exports = router;