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


    expandedRowIds: any[] = [];

    selectedRowForMenu: any = null;

    onActionClick(label: string, row: any) {
        this.actionClicked.emit({ label, row });
    }

    openMenuForRow(row: any) {
        this.selectedRowForMenu = row;
    }

    toggleRow(id: any) {
        const index = this.expandedRowIds.indexOf(id);
        if (index > -1) {
            this.expandedRowIds.splice(index, 1); // já está expandido → fecha
        } else {
            this.expandedRowIds.push(id); // ainda não está expandido → abre
        }
    }

    onRowClick(event: MouseEvent, id: any) {
        // Se quiser expandir ao clicar na linha, exceto nos botões
        this.toggleRow(id);
    }

}
