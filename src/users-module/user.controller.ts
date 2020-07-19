import UserService = require("./user.service");
import User = require("./user");

export class UserController {

    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    public createUser(user: User, callback: (error: any, response: any) => void) {
        try {
            this.userService.createUser(user, (error, result) => {
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

    public updateUser(id: any, user: User, callback: (error: any, response: any) => void) {
        try {
            this.userService.updateUser(id, user, (error, result) => {
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


    public getAllUsers(callback: (error: any, response: any) => void) {
        try {
            this.userService.getAllUserData((error, result) => {
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

    public getUserById(id: number, callback: (error: any, response: any) => void) {
        try {
            this.userService.getUserById(id, (error, result) => {
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

    public deleteUser(id: number, callback: (error: any, response: any) => void) {
        try {
            this.userService.deleteUser(id, (error, result) => {
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