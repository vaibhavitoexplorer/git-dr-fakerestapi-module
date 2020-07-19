import ActivityService = require("./activity.service");
import Activity = require("./activity");

export class ActivityController {

    private activityService: ActivityService;
    constructor() {
        this.activityService = new ActivityService();
    }

    public createActivity(activity: Activity, callback: (error: any, response: any) => void) {
        try {
            this.activityService.createActivity(activity, (error, result) => {
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

    public updateActivity(id: any, activity: Activity, callback: (error: any, response: any) => void) {
        try {
            this.activityService.updateActivity(id, activity, (error, result) => {
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


    public getAllActivities(callback: (error: any, response: any) => void) {
        try {
            this.activityService.getAllActivityData((error, result) => {
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

    public getActivityById(id: number, callback: (error: any, response: any) => void) {
        try {
            this.activityService.getActivityById(id, (error, result) => {
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

    public deleteActivity(id: number, callback: (error: any, response: any) => void) {
        try {
            this.activityService.deleteActivity(id, (error, result) => {
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