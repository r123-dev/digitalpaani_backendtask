const express = require('express');
const router = express.Router();
const { authenticateUser } = require('./middlewares/auth'); // Assuming middleware for user authentication
const controller = require('./controller');

// User Authentication
router.post('/login', controller.login);
router.post('/register', controller.register);

// CRUD operations for managing book entries
router.get('/books', authenticateUser, controller.getAllBooks);
router.get('/books/:id', authenticateUser, controller.getBookById);
router.post('/books', authenticateUser, controller.createBook);
router.patch('/books/:id', authenticateUser, controller.updateBook);
router.delete('/books/:id', authenticateUser, controller.deleteBook);

// Filtering books by author or publication year
router.get('/books/filter', authenticateUser, controller.filterBooks);

module.exports = router;
