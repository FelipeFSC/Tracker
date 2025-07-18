import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';

@Component({
    selector: 'app-register-tracker',
    standalone: false,
    templateUrl: './register-tracker.html',
    styleUrl: './register-tracker.css',
})
export class RegisterTracker {
    @ViewChildren('lastTask') lastTasks!: QueryList<ElementRef>;

    isMobile = false;

    tasks: any[] = [];

    isOpen: boolean = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private dbService: DataBaseService
    ) {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isMobile = state.matches;
            });
    }

    ngOnInit() {
        this.addTask();
    }

    ngAfterViewChecked() {
        if (this.lastTasks && this.lastTasks.length > 0) {
            const lastTaskElement = this.lastTasks.last.nativeElement;
            lastTaskElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    addTask() {
        const currentDate = new Date();
        const currentTime = currentDate.toTimeString().slice(0, 5); // "HH:mm"

        const lastTask =
            this.tasks.length > 0 ? this.tasks[this.tasks.length - 1] : null;

        // Atualiza endTime da última tarefa, se existir
        if (lastTask) {
            lastTask.endTime = currentTime;
        }

        // Cria a nova tarefa, copiando a descrição da última se existir
        this.tasks.push({
            startTime: currentTime,
            endTime: '',
            description: lastTask ? lastTask.descricao : '',
        });
    }

    onOpen() {
        this.isOpen = !this.isOpen;
    }

    removeTask(index: number) {
        this.tasks.splice(index, 1);
    }

    onSave() {
        console.log('Tarefas enviadas:', this.tasks);
        for (let item of this.tasks) {
            this.createTaskElement(item);
        }
    }

    createTaskElement(item: any) {
        console.log(item);
        let task = {
            startTime: item.startTime,
            endTime: item.endTime,
            description: item.description,
            applicant: item.applicant,
            type: item.type,
            serviceOrder: item.serviceOrder,
            date: new Date()
        };

        this.dbService.add('task', task);
    }
}
