import BookService = require("./book.service");
import Book = require("./book");

export class BookController {

    private bookService: BookService;
    constructor() {
        this.bookService = new BookService();
    }

    public createBook(book: Book, callback: (error: any, response: any) => void) {
        try {
            this.bookService.createBook(book, (error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            return e;
        }
    }

    public updateBook(id: any, book: Book, callback: (error: any, response: any) => void) {
        try {
            this.bookService.updateBook(id, book, (error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            return e;
        }
    }


    public getAllBooks(callback: (error: any, response: any) => void) {
        try {
            this.bookService.getAllBookData((error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            return e;
        }
    }

    public getBookById(id: number, callback: (error: any, response: any) => void) {
        try {
            this.bookService.getBookById(id, (error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            return e;
        }
    }

    public deleteBook(id: number, callback: (error: any, response: any) => void) {
        try {
            this.bookService.deleteBook(id, (error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            return e;
        }
    }
}