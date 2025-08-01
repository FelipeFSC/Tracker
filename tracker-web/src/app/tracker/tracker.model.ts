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
        date?: Date;
        status?: Status;
        tasks?: Task[];
        options?: { icon: string; label: string }[];
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