# College Library Management System

A robust Node.js-based library management system implementing various data structures for efficient book management and request handling. The system uses file-based storage for data persistence and includes features like book searching, request queuing, and availability tracking.

## 🚀 Features

- **Book Management**
  - Add new books to the library
  - Search books using Binary Search Tree
  - Track book availability
  - Sort books by popularity

- **Request Handling**
  - Queue-based request processing
  - Student request tracking
  - Automatic request prioritization

- **Data Structures Implementation**
  - Binary Search Tree for efficient book searching
  - Queue for managing book requests
  - Stack for tracking book history
  - Arrays and sorting algorithms for book organization

## 🛠️ Tech Stack

- Node.js
- Express.js
- File-based storage (JSON)
- RESTful API architecture

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 📚 API Documentation

### Books

#### Add a New Book
```http
POST /api/books
```
Request body:
```json
{
    "title": "Introduction to Algorithms",
    "author": "Thomas H. Cormen"
}
```

#### Get All Books
```http
GET /api/books
```

#### Search Books
```http
GET /api/books/search?title=Algorithm
```

### Requests

#### Create Book Request
```http
POST /api/requests
```
Request body:
```json
{
    "studentId": "student123",
    "bookId": "book123"
}
```

#### Get All Requests
```http
GET /api/requests
```

## 📁 Project Structure

```
college-library-system/
├── src/
│   ├── data/           # JSON storage files
│   ├── models/         # Data structure implementations
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── app.js         # Main application file
├── package.json
└── README.md
```

## 🧪 Testing

Test the API endpoints using Postman or any HTTP client:

1. Start the server
```bash
npm run dev
```

2. Send requests to the endpoints listed in the API Documentation

## 🔍 Data Structures

### Binary Search Tree (BST)
- Used for efficient book searching
- Implemented in `src/models/BinarySearchTree.js`
- Time complexity: O(log n) for search operations

### Queue
- Manages book requests in FIFO order
- Implemented in `src/models/Queue.js`
- Ensures fair request processing

### Stack
- Tracks book borrowing history
- Implemented in `src/models/Stack.js`
- Maintains chronological order of operations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🎯 Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement book reservation system
- [ ] Add email notifications for due dates
- [ ] Create admin dashboard
- [ ] Add book categories and tags
- [ ] Implement late fee calculation

## 🛟 Support

For support, email your-email@example.com or open an issue in this repository.

## 👥 Authors

- Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped with the project
- Inspiration from modern library management systems
