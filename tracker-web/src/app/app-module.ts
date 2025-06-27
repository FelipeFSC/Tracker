import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        App,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        provideBrowserGlobalErrorListeners(),
    ],
    bootstrap: [App]
})
export class AppModule { }
