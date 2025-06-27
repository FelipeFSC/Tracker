import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTaskTemplate } from './register-task-template';
import { ToolbarModule } from '../toolbar/toolbar-module';
import { MaterialModule } from '../material/material-module';
import { RegisterTaskTemplateRoutingModule } from './register-task-routing-module';

@NgModule({
    declarations: [
        RegisterTaskTemplate
    ],
    imports: [
        RegisterTaskTemplateRoutingModule,
        CommonModule,
        MaterialModule,
        ToolbarModule
    ]
})
export class RegisterTaskTemplateModule { }
