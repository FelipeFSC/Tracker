import { registerLocaleData } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Router } from '@angular/router';

registerLocaleData(localePt);

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './tracker.html',
    styleUrl: './tracker.css',
})
export class Tracker {
    columns = [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
    ];

    filtroSelecionado = 'exact';

    showNewTrackerModal: boolean = false;
    dataTarefa: Date = new Date();

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
                    solicitante: 'Coca Cola',
                },
                {
                    hrInicio: '11:00',
                    hrFim: '13:00',
                    atividade: 'Desenvolvimento',
                    solicitante: 'Coca Cola',
                },
                {
                    hrInicio: '13:00',
                    hrFim: '16:00',
                    atividade: 'Desenvolvimento',
                    solicitante: 'Coca Cola',
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
        },
    ];

    constructor(private router: Router) {}

    handleTableAction(event: { label: string; row: any }) {
        switch (event.label) {
            case 'Editar':
                //this.editar(event.row);
                console.log('EDITAR ' + event.row);
                break;
            case 'Excluir':
                //this.excluir(event.row);
                console.log('DELETAR ' + event.row);
                break;
            default:
                console.warn('Ação não reconhecida:', event.label);
        }
    }

    mesAnoSelecionado: string = this.pegarMesAtual();
    @ViewChild('inputMes') inputMes!: ElementRef;

    filtrarPorMesAno(valor: string) {
        console.log(valor);
    }

    pegarMesAtual(): string {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
        return `${ano}-${mes}`;
    }

    alterarMes(incremento: number) {
        const [anoStr, mesStr] = this.mesAnoSelecionado.split('-');
        const ano = parseInt(anoStr);
        const mes = parseInt(mesStr);

        const novaData = new Date(ano, mes - 1 + incremento);
        const novoAno = novaData.getFullYear();
        const novoMes = (novaData.getMonth() + 1).toString().padStart(2, '0');

        this.mesAnoSelecionado = `${novoAno}-${novoMes}`;
        this.filtrarPorMesAno(this.mesAnoSelecionado);
    }

    abrirSeletor() {
        const input = this.inputMes.nativeElement;
        input.style.pointerEvents = 'auto';
        input.focus();
        input.showPicker?.();
        setTimeout(() => (input.style.pointerEvents = 'none'), 200);
    }

    get dataSelecionadaComoDate(): Date {
        if (!this.mesAnoSelecionado) {
            this.mesAnoSelecionado = this.pegarMesAtual();
        }
        const [ano, mes] = this.mesAnoSelecionado.split('-').map(Number);
        return new Date(ano, mes - 1);
    }

    onNavigateRegisterTracker() {
        console.log('Tarefa criada com data:', this.dataTarefa);
        this.showNewTrackerModal = false;

        this.router.navigate(['tracker', 'register']);
    }
}
