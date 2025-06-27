import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTracker } from './register-tracker';
import { ToolbarModule } from '../toolbar/toolbar-module';
import { MaterialModule } from '../material/material-module';
import { RegisterTrackerRoutingModule } from './register-tracker-routing.module';

@NgModule({
    declarations: [
        RegisterTracker
    ],
    imports: [
        RegisterTrackerRoutingModule,
        CommonModule,
        MaterialModule,
        ToolbarModule
    ]
})
export class RegisterTrackerModule { }
