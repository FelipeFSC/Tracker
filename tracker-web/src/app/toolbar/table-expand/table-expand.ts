import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-expand',
    standalone: false,
    templateUrl: './table-expand.html',
    styleUrl: './table-expand.css'
})
export class TableExpand {

    @Input() columns: { key: string, label: string }[] = [];
    @Input() data: any[] = [];

    expandedRowId: number | null = null;

    toggleRow(id: number) {
        this.expandedRowId = this.expandedRowId === id ? null : id;
    }
}
