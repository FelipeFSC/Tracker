import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-upload',
    standalone: false,
    templateUrl: './upload.html',
    styleUrl: './upload.css'
})
export class Upload {

    constructor(
        private router: Router
    ){}

    onClose() {
        this.router.navigate(['tracker']);
    }
}
