import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.css',
    standalone: false
})
export class Home implements AfterViewChecked {

    @ViewChildren('lastTask') lastTasks!: QueryList<ElementRef>;

    isMobile = false;

    tasks: any[] = [];

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
