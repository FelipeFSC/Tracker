import {trigger, state, style, animate, transition } from '@angular/animations'; import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table-expand',
    standalone: false,
    templateUrl: './table-expand.html',
    styleUrl: './table-expand.css',
    animations: [
        trigger('expandCollapse', [
            state('void', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
            state('*', style({ height: '*', opacity: 1 })),
            transition('void <=> *', animate('200ms ease-in-out'))
        ])
    ]
})
export class TableExpand {

    @Input() columns: Array<{ key: string, label: string, showStatusDot?: boolean }> = [];
    @Input() data: any[] = [];

    @Input() expandedColumns: Array<{ key: string, label: string }> = [];
    actionsButton: { icon: string } = { icon: 'more_vert' };


    @Output() actionClicked = new EventEmitter<{ label: string, row: any }>();
    @Input() expandedDataKey: string = 'tasks'; // padrão para retrocompatibilidade

    dataSource: any[] = [];

    expandidos: any[] = [];

    selectedRowForMenu: any = null;

    ngOnChanges() {
        if (this.data && this.data.length > 0) {
            console.log(this.data);

            //this.dataSource = this.data;
        }
    }

    onActionClick(label: string, row: any) {
        this.actionClicked.emit({ label, row });
    }

    openMenuForRow(row: any) {
        this.selectedRowForMenu = row;
    }

    onAbreFecha(event: MouseEvent, id: any) {
        const index = this.expandidos.indexOf(id);
        if (index > -1) {
            this.expandidos.splice(index, 1);
        } else {
            this.expandidos.push(id);
        }
    }

    // titulos1: string[] = ['status', 'nome', 'data', 'solicitante'];
    // titulos2: string[] = ['hora_inicio', 'hora_fim', 'tipo_atividade', 'solicitante', 'os', 'observacoes'];
    // lista: any[] = [
    //     {
    //         "id": "1",
    //         "nome": "Projeto A",
    //         "data": "2025-07-17",
    //         "solicitante": "João Silva",
    //         'status': 'success',
    //         "detalhes": [
    //             {
    //                 "hora_inicio": "08:00",
    //                 "hora_fim": "10:00",
    //                 "tipo_atividade": "Reunião",
    //                 "solicitante": "João Silva",
    //                 "os": "OS1234",
    //                 "observacoes": "Reunião de alinhamento inicial"
    //             },
    //             {
    //                 "hora_inicio": "10:15",
    //                 "hora_fim": "12:00",
    //                 "tipo_atividade": "Desenvolvimento",
    //                 "solicitante": "João Silva",
    //                 "os": "OS1234",
    //                 "observacoes": "Início do desenvolvimento do módulo X"
    //             }
    //         ]
    //     },
    //     {
    //         "id": "2",
    //         "nome": "Projeto B",
    //         "data": "2025-07-17",
    //         "solicitante": "Maria Oliveira",
    //         'status': 'success',
    //         "detalhes": [
    //             {
    //                 "hora_inicio": "09:00",
    //                 "hora_fim": "11:30",
    //                 "tipo_atividade": "Suporte Técnico",
    //                 "solicitante": "Maria Oliveira",
    //                 "os": "OS5678",
    //                 "observacoes": "Resolução de erro no sistema"
    //             },
    //             {
    //                 "hora_inicio": "13:00",
    //                 "hora_fim": "15:00",
    //                 "tipo_atividade": "Documentação",
    //                 "solicitante": "Maria Oliveira",
    //                 "os": "OS5678",
    //                 "observacoes": "Atualização dos manuais técnicos"
    //             }
    //         ]
    //     },
    //     {
    //         "id": "3",
    //         "nome": "Projeto C",
    //         "data": "2025-07-17",
    //         "solicitante": "Carlos Mendes",
    //         'status': 'error',
    //         "detalhes": [
    //             {
    //                 "hora_inicio": "08:30",
    //                 "hora_fim": "11:00",
    //                 "tipo_atividade": "Testes",
    //                 "solicitante": "Carlos Mendes",
    //                 "os": "OS8910",
    //                 "observacoes": "Testes de regressão no sistema"
    //             },
    //             {
    //                 "hora_inicio": "11:15",
    //                 "hora_fim": "12:45",
    //                 "tipo_atividade": "Correção de Bugs",
    //                 "solicitante": "Carlos Mendes",
    //                 "os": "OS8910",
    //                 "observacoes": "Correções de falhas encontradas nos testes"
    //             }
    //         ]
    //     },
    //     {
    //         "id": "4",
    //         "nome": "Projeto D",
    //         "data": "2025-07-17",
    //         "solicitante": "Fernanda Lima",

    //     },
    //     {
    //         "id": "5",
    //         "nome": "Projeto E",
    //         "data": "2025-07-17",
    //         "solicitante": "Lucas Pereira",
    //         'status': 'danger',
    //         "detalhes": [
    //             {
    //                 "hora_inicio": "08:00",
    //                 "hora_fim": "09:45",
    //                 "tipo_atividade": "Deploy",
    //                 "solicitante": "Lucas Pereira",
    //                 "os": "OS3344",
    //                 "observacoes": "Deploy da versão 2.3 em produção"
    //             },
    //             {
    //                 "hora_inicio": "10:00",
    //                 "hora_fim": "11:30",
    //                 "tipo_atividade": "Monitoramento",
    //                 "solicitante": "Lucas Pereira",
    //                 "os": "OS3344",
    //                 "observacoes": "Acompanhamento de métricas pós-deploy"
    //             }
    //         ]
    //     }
    // ];

}
