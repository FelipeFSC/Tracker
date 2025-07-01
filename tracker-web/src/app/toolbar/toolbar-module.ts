import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal } from './principal/principal';
import { Navigation } from './navigation/navigation';
import { MaterialModule } from '../material/material-module';
import { TableExpand } from './table-expand/table-expand';
import { Table } from './table/table';

@NgModule({
    declarations: [
        Navigation,
        Principal,
        TableExpand,
        Table,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        Navigation,
        Principal,
        TableExpand,
        Table,
    ]
})
export class ToolbarModule { }
