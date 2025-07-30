import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar-module';
import { Tracker } from './tracker/tracker';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        App,
        Tracker,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToolbarModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        DatePipe
    ],
    bootstrap: [App]
})
export class AppModule { }
