import axois from 'axios';
import CoverPhoto = require('./cover-photo');

class CoverPhotoService {

    apiUrl = "https://fakerestapi.azurewebsites.net/api/CoverPhotos";

    public createCoverPhoto(coverPhoto: CoverPhoto, callback: (error: any, response: any) => void) {
        axois.post(this.apiUrl, coverPhoto).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public updateCoverPhoto(id: number, coverPhoto: CoverPhoto, callback: (error: any, response: any) => void) {
        axois.put(this.apiUrl + '/' + id, coverPhoto).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAllCoverPhotoData(callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getCoverPhotoById(id: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getCoverPhotoByBookId(bookId: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/books/' + bookId).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public deleteCoverPhoto(id: number, callback: (error: any, response: any) => void) {
        axois.delete(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }
}

Object.seal(CoverPhotoService);
export = CoverPhotoService;
