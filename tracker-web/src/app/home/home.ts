import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {

    columns = [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
    ];

    expandedColumns = [
        { key: 'hrInicio', label: 'H. inicio' },
        { key: 'hrFim', label: 'H. Término' },
        { key: 'atividade', label: 'Tipo atividade' },
        { key: 'solicitante', label: 'Solicitante' },
        { key: 'os', label: 'OS' },
        { key: 'obs', label: 'Observações' },
    ];

    rows = [
        {
            id: 1,
            name: 'João',
            email: 'joao@email.com',
            status: 'success',
            details: [
                {
                    hrInicio: '10:00',
                    hrFim: '11:00',
                    atividade: 'Desenvolvimento',
                    solicitante: 'Coca Cola'
                },
                {
                    hrInicio: '11:00',
                    hrFim: '13:00',
                    atividade: 'Desenvolvimento',
                    solicitante: 'Coca Cola'
                },
                {
                    hrInicio: '13:00',
                    hrFim: '16:00',
                    atividade: 'Desenvolvimento',
                    solicitante: 'Coca Cola'
                },
            ],
        },
        {
            id: 2,
            name: 'PEDRO',
            email: 'PEDRO@email.com',
            status: 'success',
            details: [
                {
                    hrInicio: '10:00',
                    hrFim: '11:00',
                },
            ],
        },
        // outros dados...
    ];

    actionsButton = { icon: 'more_vert', label: '' };

    actionsMenu = [
        {
            icon: 'edit',
            label: 'Editar',
        },
        {
            icon: 'delete',
            label: 'Excluir',
        }
    ];


    handleTableAction(event: { label: string, row: any }) {
        switch (event.label) {
            case 'Editar':
                //this.editar(event.row);
                console.log("EDITAR " + event.row);
                break;
            case 'Excluir':
                //this.excluir(event.row);
                console.log("DELETAR "+ event.row);
                break;
            default:
                console.warn('Ação não reconhecida:', event.label);
        }
    }

}
