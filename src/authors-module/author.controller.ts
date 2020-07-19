import AuthorService = require("./author.service");
import Author = require("./author");

export class AuthorController {

    private authorService: AuthorService;
    constructor() {
        this.authorService = new AuthorService();
    }

    public createAuthor(author: Author, callback: (error: any, response: any) => void) {
        try {
            this.authorService.createAuthor(author, (error, result) => {
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

    public updateAuthor(id: any, author: Author, callback: (error: any, response: any) => void) {
        try {
            this.authorService.updateAuthor(id, author, (error, result) => {
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


    public getAllAuthors(callback: (error: any, response: any) => void) {
        try {
            this.authorService.getAllAuthorData((error, result) => {
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

    public getAuthorById(id: number, callback: (error: any, response: any) => void) {
        try {
            this.authorService.getAuthorById(id, (error, result) => {
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

    public getAuthorByBookId(bookId: number, callback: (error: any, response: any) => void) {
        try {
            this.authorService.getAuthorByBookId(bookId, (error, result) => {
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

    public deleteAuthor(id: number, callback: (error: any, response: any) => void) {
        try {
            this.authorService.deleteAuthor(id, (error, result) => {
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