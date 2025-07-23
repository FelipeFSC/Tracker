import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-action',
    standalone: false,
    templateUrl: './action.html',
    styleUrl: './action.css'
})
export class Action {

    @Input() title: string = "";

    @Input() labels: any;

    @Output() onClose = new EventEmitter();

    constructor(){}

    onEmitClose() {
        this.onClose.emit();
    }
}
