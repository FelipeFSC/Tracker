import { registerLocaleData } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Router } from '@angular/router';
import { DataBaseService } from '../service/data-base.service';
import { TrackerModel } from './tracker.model';
import { DateUtil } from '../util/dateUtil';

registerLocaleData(localePt);

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './tracker.html',
    styleUrl: './tracker.css',
})
export class Tracker {
    columns = [
        { key: 'status', label: 'Status' },
        { key: 'personName', label: 'Nome' },
        { key: 'date', label: 'Data' },
    ];
    expandedColumns = [
        { key: 'startTime', label: 'H. inicio' },
        { key: 'endTime', label: 'H. Término' },
        { key: 'type', label: 'Tipo atividade' },
        { key: 'applicant', label: 'Solicitante' },
        { key: 'serviceOrder', label: 'OS' },
        { key: 'description', label: 'Observações' },
    ];
    dataSource: TrackerModel.Tracker[] = [];

    selectedFilter = 'exact';

    showNewTrackerModal: boolean = false;

    newTrackerDate: Date = new Date();

    dateUtil: DateUtil = new DateUtil();

    yearMonthSelected: string = this.getActualMonth();
    @ViewChild('inputMes') inputMes!: ElementRef;

    constructor(private router: Router, private dbService: DataBaseService) {}

    ngOnInit() {
        this.listTracker(this.yearMonthSelected);
    }

    listTracker(yearMonth: string) {
        let [startDate, endDate] =
            DateUtil.getStartAndEndRangeFromMonthYear(yearMonth);
        this.dbService
            .findByDateRange('tracker', 'date', startDate, endDate)
            .then((list: any[]) => {
                let itens: TrackerModel.Tracker[] = [];
                for (let item of list) {
                    let data: TrackerModel.Tracker = {
                        id: item.id,
                        code: item.code,
                        personName: item.personName,
                        date: item.date.toLocaleDateString('pt-BR'),
                        status: TrackerModel.Status['Success'],
                        tasks: item.tasks,
                        options: [
                            { icon: 'edit', label: 'Editar' },
                            { icon: 'delete', label: 'Excluir' },
                        ],
                    };
                    itens.push(data);
                }

                this.dataSource = itens;
            });
    }

    handleTableAction(event: { label: string; row: any }) {
        switch (event.label) {
            case 'Editar':
                this.onEdit(event.row.id);
                break;
            case 'Excluir':
                this.onDelete(event.row.code);
                break;
            default:
                console.warn('Ação não reconhecida:', event.label);
        }
    }

    async onDelete(code: string) {
        await this.dbService.delete('tracker', 'code', code);
        this.listTracker(this.yearMonthSelected);
    }

    onEdit(id: string) {
        this.router.navigate(['tracker', id, 'register']);
    }

    onYearMonthFilter(value: string) {
        this.listTracker(value);
    }

    getActualMonth(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        return `${year}-${month}`;
    }

    onChangeMonth(incremento: number) {
        const [yearSrt, monthStr] = this.yearMonthSelected.split('-');
        const year = parseInt(yearSrt);
        const month = parseInt(monthStr);

        const newDate = new Date(year, month - 1 + incremento);
        const newYear = newDate.getFullYear();
        const newMonth = (newDate.getMonth() + 1).toString().padStart(2, '0');

        this.yearMonthSelected = `${newYear}-${newMonth}`;
        this.onYearMonthFilter(this.yearMonthSelected);
    }

    onOpenSelector() {
        const input = this.inputMes.nativeElement;
        input.style.pointerEvents = 'auto';
        input.focus();
        input.showPicker?.();
        setTimeout(() => (input.style.pointerEvents = 'none'), 200);
    }

    get getSelectDateAsDateObject(): Date {
        if (!this.yearMonthSelected) {
            this.yearMonthSelected = this.getActualMonth();
        }
        const [year, month] = this.yearMonthSelected.split('-').map(Number);
        return new Date(year, month - 1);
    }

    onNavigateRegisterTracker() {
        this.showNewTrackerModal = false;

        let formatDate = this.newTrackerDate.toLocaleDateString('pt-BR');
        let finalDate = formatDate.replaceAll('/', '-');

        this.router.navigate(['tracker', 'register', finalDate]);
    }

    onUpload() {
        this.router.navigate(['upload']);
    }
}
