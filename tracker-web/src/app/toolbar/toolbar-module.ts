import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal } from './principal/principal';
import { Navigation } from './navigation/navigation';
import { MaterialModule } from '../material/material-module';

@NgModule({
    declarations: [
        Principal,
        Navigation,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        Principal,
        Navigation,
    ]
})
export class ToolbarModule { }
