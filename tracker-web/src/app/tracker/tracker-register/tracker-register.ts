import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataBaseService } from '../../service/data-base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackerModel } from '../tracker.model';

@Component({
    selector: 'app-tracker-register',
    standalone: false,
    templateUrl: './tracker-register.html',
    styleUrl: './tracker-register.css',
})
export class TrackerRegister {
    @ViewChildren('lastTask') lastTasks!: QueryList<ElementRef>;

    isMobile = false;

    isOpen: boolean = false;

    tracker: TrackerModel.Tracker = {};

    constructor(
        private breakpointObserver: BreakpointObserver,
        private dbService: DataBaseService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isMobile = state.matches;
            });
    }

    ngOnInit() {
        this.extractParams();
    }

    extractParams() {
        this.activatedRoute.paramMap.subscribe((params) => {
            const date = params.get('date');
            const trackerId = params.get('trackerId');

            if (date) {
                const [day, month, year] = date!.split('-').map(Number);
                const dateObj = new Date(year, month - 1, day);
                this.tracker.date = dateObj;
                this.tracker.tasks = [];

                this.addTask();
            }

            if (trackerId) {
                this.dbService
                    .findOne('tracker', 'id', trackerId)
                    .then((tracker: any) => {
                        if (tracker) {
                            this.tracker = tracker;
                        }
                    });
            }
        });
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
            this.tracker.tasks!.length > 0
                ? this.tracker.tasks![this.tracker.tasks!.length - 1]
                : null;

        // Atualiza endTime da última tarefa, se existir
        if (lastTask) {
            lastTask.endTime = currentTime;
        }

        // Cria a nova tarefa, copiando a descrição da última se existir
        this.tracker.tasks!.push({
            startTime: currentTime,
            endTime: '',
            description: lastTask ? lastTask.description : '',
        });
    }

    onOpen() {
        this.isOpen = !this.isOpen;
    }

    removeTask(index: number) {
        this.tracker.tasks?.splice(index, 1);
    }

    onSave() {
        let taskList = this.tracker.tasks!.map((item) => ({
            code: 'tracker-' + new Date().getTime(),
            startTime: item.startTime,
            endTime: item.endTime,
            description: item.description,
            applicant: item.applicant,
            type: item.type,
            serviceOrder: item.serviceOrder,
        }));

        let tracker = {
            code: 'task-' + new Date().getTime(),
            date: this.tracker.date,
            personName: 'NOME_SESSAO',
            status: null,
            tasks: taskList,
        };

        if (this.tracker.id) {
            this.dbService
                .update('tracker', 'id', this.tracker.id, tracker)
                .then(() => {
                    console.log('Tracker updated successfully');
                });
        } else {
            this.dbService.add('tracker', tracker).then(() => {
                console.log('Tracker create successfully');
            });
        }

        this.router.navigate(['tracker']);
    }
}
