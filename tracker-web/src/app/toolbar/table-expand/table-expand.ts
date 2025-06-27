import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table-expand',
    standalone: false,
    templateUrl: './table-expand.html',
    styleUrl: './table-expand.css'
})
export class TableExpand {

    @Input() columns: Array<{ key: string, label: string, showStatusDot?: boolean }> = [];
    @Input() data: any[] = [];
    @Input() expandedColumns: Array<{ key: string, label: string }> = [];
    @Input() actionsButton: { icon: string, label: string } = { icon: 'more_vert', label: 'Ações' };
    @Input() actionsMenu: Array<{ icon: string, label: string }> = [];

    @Output() actionClicked = new EventEmitter<{ label: string, row: any }>();
    @Input() expandedDataKey: string = 'details'; // padrão para retrocompatibilidade


    expandedRowId: any = null;

    selectedRowForMenu: any = null;

    onActionClick(label: string, row: any) {
        this.actionClicked.emit({ label, row });
    }

    openMenuForRow(row: any) {
        this.selectedRowForMenu = row;
    }

    toggleRow(id: any) {
        this.expandedRowId = this.expandedRowId === id ? null : id;
    }

    onRowClick(event: MouseEvent, id: any) {
        // Se quiser expandir ao clicar na linha, exceto nos botões
        this.toggleRow(id);
    }

}
