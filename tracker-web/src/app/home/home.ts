import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.css',
    standalone: false,
})
export class Home implements AfterViewChecked {

    @ViewChildren('lastTask') lastTasks!: QueryList<ElementRef>;

    isMobile = false;

    tasks: any[] = [];

    displayedColumns: string[] = ['colaborador', 'data', 'acoes'];
    dataSource: any = [
        {
            id: 1,
            colaborador: "Joao Silva",
            data: "2025-06-20",
            horario_inicio: "08:00",
            horario_termino: "12:00",
            tipo_atividade: "Manutencao Preventiva",
            solicitante: "Carlos Mendes",
            os: "OS12345",
            observacoes: "Equipamento funcionando normalmente apos manutencao."
        },
        {
            id: 2,
            colaborador: "Maria Oliveira",
            data: "2025-06-21",
            horario_inicio: "13:00",
            horario_termino: "17:00",
            tipo_atividade: "Reparo",
            solicitante: "Ana Souza",
            os: "OS12346",
            observacoes: "Troca de componente danificado."
        },
        {
            id: 3,
            colaborador: "Maria Oliveira",
            data: "2025-06-21",
            horario_inicio: "13:00",
            horario_termino: "17:00",
            tipo_atividade: "Reparo",
            solicitante: "Ana Souza",
            os: "OS12346",
            observacoes: "Troca de componente danificado."
        },
        // Adicione mais registros se desejar
    ];

    expandedElement: any | null = null;

    isEven(index: number): boolean {
        index = index + 1;
        console.log(index + "");
        return index % 2 === 0;
    }

    toggleRow(element: any) {
        this.expandedElement = this.expandedElement === element ? null : element;
    }

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isMobile = state.matches;
            });
    }

    ngAfterViewChecked() {
        if (this.lastTasks && this.lastTasks.length > 0) {
            const lastTaskElement = this.lastTasks.last.nativeElement;
            lastTaskElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    adicionarTarefa() {
        const agora = new Date();
        const horaAtual = agora.toTimeString().slice(0, 5); // "HH:mm"

        const ultimaTarefa = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1] : null;

        // Atualiza horaFim da última tarefa, se existir
        if (ultimaTarefa) {
            ultimaTarefa.horaFim = horaAtual;
        }

        // Cria a nova tarefa, copiando a descrição da última se existir
        this.tasks.push({
            horaInicio: horaAtual,
            horaFim: '',
            descricao: ultimaTarefa ? ultimaTarefa.descricao : '',
        });
    }

    removerTarefa(index: number) {
        this.tasks.splice(index, 1);
    }

    enviarFormulario() {
        console.log('Tarefas enviadas:', this.tasks);
        alert('Tarefas enviadas com sucesso!');
    }

    isOpen: boolean = false;

    onOpen() {
        this.isOpen = !this.isOpen;
        console.log(this.isOpen);
    }
}
