import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal } from './principal/principal';
import { Navigation } from './navigation/navigation';
import { MaterialModule } from '../material/material-module';
import { TableExpand } from './table-expand/table-expand';
import { Action } from './action/action';

@NgModule({
    declarations: [
        Navigation,
        Principal,
        TableExpand,
        Action,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        Navigation,
        Principal,
        TableExpand,
        Action
    ]
})
export class ToolbarModule { }
