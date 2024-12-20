class Node {
    constructor(book) {
        this.book = book;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(book) {
        const node = new Node(book);
        
        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        while (true) {
            if (book.title < current.book.title) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }

    search(title) {
        let current = this.root;
        while (current) {
            if (current.book.title === title) return current.book;
            if (title < current.book.title) current = current.left;
            else current = current.right;
        }
        return null;
    }
}

module.exports = BinarySearchTree;