import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataBaseService } from '../../service/data-base.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tracker-register',
    standalone: false,
    templateUrl: './tracker-register.html',
    styleUrl: './tracker-register.css',
})
export class TrackerRegister {
    @ViewChildren('lastTask') lastTasks!: QueryList<ElementRef>;

    isMobile = false;

    tasks: any[] = [];

    isOpen: boolean = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private dbService: DataBaseService,
        private router: Router
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
        let taskList = this.tasks.map((item) => ({
            code: 'tracker-' + new Date().getTime(),
            startTime: item.startTime,
            endTime: item.endTime,
            description: item.description,
            applicant: item.applicant,
            type: item.type,
            serviceOrder: item.serviceOrder,
        }));
        
        let tracker = {
            code: 'tracker-' + new Date().getTime(),
            date: new Date(),
            status: null,
            tasks: taskList,
        };

        this.dbService.add('tracker', tracker);

        this.router.navigate(['tracker']);
    }
}
