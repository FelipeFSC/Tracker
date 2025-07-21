import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    standalone: false,
    templateUrl: './navigation.html',
    styleUrl: './navigation.css'
})
export class Navigation {

    constructor(
        private router: Router,
    ) { }


    onHome() {
        this.router.navigate(['home']);
    }

    onTracker() {
        this.router.navigate(['tracker']);
    }

    onTaskTemplate() {
        this.router.navigate(['task-template']);
    }
}
