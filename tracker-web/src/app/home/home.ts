import { registerLocaleData } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Router } from '@angular/router';

registerLocaleData(localePt);

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    
}
