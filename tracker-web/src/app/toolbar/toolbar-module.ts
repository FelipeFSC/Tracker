import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal } from './principal/principal';
import { Navigation } from './navigation/navigation';
import { MaterialModule } from '../material/material-module';
import { TableExpand } from './table-expand/table-expand';

@NgModule({
    declarations: [
        Navigation,
        Principal,
        TableExpand,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        Navigation,
        Principal,
        TableExpand
    ]
})
export class ToolbarModule { }
