class Book {
    constructor(id, title, author, available = true, popularity = 0) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        this.popularity = popularity;
    }
}

module.exports = Book;