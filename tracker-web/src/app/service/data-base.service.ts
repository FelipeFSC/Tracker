import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { audit } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataBaseService {
    private db: any;

    constructor() {
        this.createDataBase();
    }

    private createDataBase() {
        this.db = new Dexie('TrackerDB');

        this.db.version(1).stores({
            task: '++id, &code, date, startTime, endTime, type, applicant, serviceOrder, description',
        });
    }

    public async add<T>(tableName: string, obj: T) {
        return await this.db[tableName].add(obj);
    }

    public async update<T>(
        tableName: string,
        column: string,
        value: any,
        obj: T
    ) {
        return await this.db[tableName].where(column).equals(value).modify(obj);
    }

    public async findAll(tableName: string, orderBy: string) {
        return await this.db[tableName].orderBy(orderBy).reverse().toArray();
    }

    public async findOne(tableName: string, column: string, value: string) {
        return await this.db[tableName].where(column).equals(value).first();
    }

    public async delete(tableName: string, column: string, value: string) {
        return await this.db[tableName]
            .where(column)
            .equals(value)
            .delete();
    }
}
