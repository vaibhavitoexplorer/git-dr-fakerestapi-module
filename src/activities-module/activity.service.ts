import axois from 'axios';
import Activity = require('./activity');

class ActivityService {

    apiUrl = "https://fakerestapi.azurewebsites.net/api/Activities";

    public createActivity(activity: Activity, callback: (error: any, response: any) => void) {
        axois.post(this.apiUrl, activity).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public updateActivity(id: number, activity: Activity, callback: (error: any, response: any) => void) {
        axois.put(this.apiUrl + '/' + id, activity).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getAllActivityData(callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public getActivityById(id: number, callback: (error: any, response: any) => void) {
        axois.get(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }

    public deleteActivity(id: number, callback: (error: any, response: any) => void) {
        axois.delete(this.apiUrl + '/' + id).then((res: any) => {
            callback(null, res.data);
        }).catch((e) => {
            callback(e.response.data, null);
        });
    }
}

Object.seal(ActivityService);
export = ActivityService;
