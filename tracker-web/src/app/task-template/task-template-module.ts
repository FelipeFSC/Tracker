import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTemplate } from './task-template';
import { MaterialModule } from '../material/material-module';
import { ToolbarModule } from '../toolbar/toolbar-module';
import { TaskTemplateRoutingModule } from './task-template-routing-module';

@NgModule({
    declarations: [
        TaskTemplate
    ],
    imports: [
        TaskTemplateRoutingModule,
        CommonModule,
        MaterialModule,
        ToolbarModule
    ]
})
export class TaskTemplateModule { }
