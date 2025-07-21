import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerRegister } from './tracker-register';
import { ToolbarModule } from '../../toolbar/toolbar-module';
import { MaterialModule } from '../../material/material-module';

@NgModule({
    declarations: [
        TrackerRegister
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ToolbarModule
    ]
})
export class RegisterTrackerModule { }
