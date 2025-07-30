export class DateUtil {
    constructor() {}

    static getStartAndEndRangeFromMonthYear(monthYear: string): [Date, Date] {
        const [year, month] = monthYear.split('-').map(Number);
        let start: Date = new Date(year, month - 2, 26);
        start.setHours(0, 0, 0, 0);
        let end: Date = new Date(year, month - 1, 25);
        end.setHours(23, 59, 59, 999);

        return [start, end];
    }
}
