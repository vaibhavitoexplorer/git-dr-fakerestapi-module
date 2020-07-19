import axois from 'axios';
import User = require('./user');

class UserService {

    apiUrl = "https://fakerestapi.azurewebsites.net/api/Users";

    public createUser(user: User, callback: (error: any, response: any) => void) {
        axois.post(this.apiUrl, user).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public updateUser(id: number, user: User, callback: (error: any, response: any) => void) {
        axois.put(this.apiUrl + '/' + id, user).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAllUserData(callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getUserById(id: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public deleteUser(id: number, callback: (error: any, response: any) => void) {
        axois.delete(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }
}

Object.seal(UserService);
export = UserService;
