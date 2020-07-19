import axois from 'axios';
import Book = require('./book');

class BookService {

    apiUrl = "https://fakerestapi.azurewebsites.net/api/Books";

    public createBook(book: Book, callback: (error: any, response: any) => void) {
        axois.post(this.apiUrl, book).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public updateBook(id: number, book: Book, callback: (error: any, response: any) => void) {
        axois.put(this.apiUrl + '/' + id, book).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAllBookData(callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getBookById(id: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public deleteBook(id: number, callback: (error: any, response: any) => void) {
        axois.delete(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }
}

Object.seal(BookService);
export = BookService;
