const jsonfile = require('jsonfile');
const { v4: uuidv4 } = require('uuid');
const Book = require('../models/Book');
const BinarySearchTree = require('../models/BinarySearchTree');

const BOOKS_FILE = './src/data/books.json';

class BookService {
    constructor() {
        this.bst = new BinarySearchTree();
        this.loadBooks();
    }

    loadBooks() {
        try {
            const books = jsonfile.readFileSync(BOOKS_FILE);
            books.forEach(book => this.bst.insert(new Book(book.id, book.title, book.author, book.available, book.popularity)));
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    async addBook(title, author) {
        const newBook = new Book(uuidv4(), title, author);
        this.bst.insert(newBook);
        
        try {
            const books = await this.getAllBooks();
            books.push(newBook);
            await jsonfile.writeFile(BOOKS_FILE, books);
            return newBook;
        } catch (error) {
            console.error('Error adding book:', error);
            throw error;
        }
    }

    searchBook(title) {
        return this.bst.search(title);
    }

    getAllBooks() {
        try {
            return jsonfile.readFileSync(BOOKS_FILE);
        } catch (error) {
            console.error('Error getting books:', error);
            return [];
        }
    }
}

module.exports = new BookService();