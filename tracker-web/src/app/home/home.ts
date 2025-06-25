import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.css',
    standalone: false
})
export class Home {
    isMobile = false;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isMobile = state.matches;
            });
    }

    tasks: any[] = [
        { title: '', date: '', duration: 0 }
    ];

    adicionarTarefa() {
        this.tasks.push({ title: '', date: '', duration: 0 });
    }

    removerTarefa(index: number) {
        this.tasks.splice(index, 1);
    }

    enviarFormulario() {
        console.log('Tarefas enviadas:', this.tasks);
        alert('Tarefas enviadas com sucesso!');
    }
}
