import axois from 'axios';
import Author = require('./author');

class AuthorService {

    apiUrl = "https://fakerestapi.azurewebsites.net/api/Authors";

    public createAuthor(author: Author, callback: (error: any, response: any) => void) {
        axois.post(this.apiUrl, author).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public updateAuthor(id: number, author: Author, callback: (error: any, response: any) => void) {
        axois.put(this.apiUrl + '/' + id, author).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAllAuthorData(callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAuthorById(id: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAuthorByBookId(bookId: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/books/' + bookId).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public deleteAuthor(id: number, callback: (error: any, response: any) => void) {
        axois.delete(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }
}

Object.seal(AuthorService);
export = AuthorService;
