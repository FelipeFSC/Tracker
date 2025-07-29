import { registerLocaleData } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Router } from '@angular/router';
import { DataBaseService } from '../service/data-base.service';

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
        { key: 'name', label: 'Nome' },
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
    dataSource: any[] = [];

    filtroSelecionado = 'exact';

    showNewTrackerModal: boolean = false;

    dataTarefa: Date = new Date();

    constructor(private router: Router, private dbService: DataBaseService) {}

    ngOnInit() {
        this.listTracker();
    }

    listTracker() {
        this.dbService.findAll('tracker', 'date').then((list: any[]) => {
            let itens = [];
            for (let item of list) {
                let data = {
                    id: item.id,
                    code: item.code,
                    name: 'Cleber',
                    date: item.date.toLocaleDateString('pt-BR'),
                    status: 'success',
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
                console.log('EDITAR ' + event.row.id);
                this.onEdit(event.row.id);
                break;
            case 'Excluir':
                console.log('DELETAR ' + event.row.code);
                this.onDelete(event.row.code);
                break;
            default:
                console.warn('Ação não reconhecida:', event.label);
        }
    }

    async onDelete(code: string) {
        await this.dbService.delete('tracker', 'code', code);
        this.listTracker();
    }

    onEdit(id: string) {
        
        this.router.navigate(['tracker', id, 'register']);
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
        this.showNewTrackerModal = false;

        let formatDate = this.dataTarefa.toLocaleDateString('pt-BR');
        let finalDate = formatDate.replaceAll('/', '-');

        this.router.navigate(['tracker', 'register', finalDate]);
    }

    onUpload() {
        this.router.navigate(['upload']);
    }
}
