import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar-module';
import { TaskTemplate } from './task-template/task-template';


@NgModule({
    declarations: [
        App,
        TaskTemplate,
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
    ],
    bootstrap: [App]
})
export class AppModule { }
