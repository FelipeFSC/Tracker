export namespace TrackerModel {
     export enum Status {
        Success = 'Success',
        Warning = 'Warning',
        Error = 'Error'
    }

    export interface Tracker {
        id?: string;
        code?: string;
        personName?: string;
        date?: string;
        status?: Status;
        tasks?: Task[];
    }

    export interface Task {
        code?: string;
        startTime?: string;
        endTime?: string;
        description?: string;
        applicant?: string;
        type?: string;
        serviceOrder?: string;
    }

    
}