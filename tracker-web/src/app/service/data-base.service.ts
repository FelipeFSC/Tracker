import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { audit } from 'rxjs';
import { DateUtil } from '../util/dateUtil';

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
            tracker: '++id, &code, date, taskList, status',
            // task: '++id, &code, startTime, endTime, type, applicant, serviceOrder, description',
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
        const searchValue = column === 'id' ? Number(value) : value;
        return await this.db[tableName]
            .where(column)
            .equals(searchValue)
            .modify(obj);
    }

    public async findAll(tableName: string, orderBy: string) {
        return await this.db[tableName].orderBy(orderBy).reverse().toArray();
    }

    public async findByDateRange(
        tableName: string,
        column: string,
        startDate: Date,
        endDate: Date
    ) {
        return await this.db[tableName]
            .where(column)
            .between(startDate, endDate, true, true)
            .toArray();
    }

    public async findOne(tableName: string, column: string, value: string) {
        const searchValue = column === 'id' ? Number(value) : value;
        return await this.db[tableName]
            .where(column)
            .equals(searchValue)
            .first();
    }

    public async findByDate(tableName: string, column: string, date: Date) {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setHours(23, 59, 59, 999);

        return await this.db[tableName]
            .where(column)
            .between(start, end, true, true)
            .toArray();
    }

    public async delete(tableName: string, column: string, value: string) {
        return await this.db[tableName].where(column).equals(value).delete();
    }
}
