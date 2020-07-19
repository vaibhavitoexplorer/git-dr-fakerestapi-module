import CoverPhotoService = require("./cover-photo.service");
import CoverPhoto = require("./cover-photo");

export class CoverPhotoController {

    private coverPhotoService: CoverPhotoService;
    constructor() {
        this.coverPhotoService = new CoverPhotoService();
    }

    public createCoverPhoto(coverPhoto: CoverPhoto, callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.createCoverPhoto(coverPhoto, (error, result) => {
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

    public updateCoverPhoto(id: any, coverPhoto: CoverPhoto, callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.updateCoverPhoto(id, coverPhoto, (error, result) => {
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


    public getAllCoverPhotos(callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.getAllCoverPhotoData((error, result) => {
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

    public getCoverPhotoById(id: number, callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.getCoverPhotoById(id, (error, result) => {
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

    public getCoverPhotoByBookId(bookId: number, callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.getCoverPhotoByBookId(bookId, (error, result) => {
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

    public deleteCoverPhoto(id: number, callback: (error: any, response: any) => void) {
        try {
            this.coverPhotoService.deleteCoverPhoto(id, (error, result) => {
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