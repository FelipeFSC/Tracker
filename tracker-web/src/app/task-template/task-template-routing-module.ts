import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTemplate } from './task-template';

const taskTemplateRoutes: Routes = [
    { path:'', component: TaskTemplate },
];

@NgModule({
    imports: [RouterModule.forRoot(taskTemplateRoutes)],
    exports: [RouterModule]
})
export class TaskTemplateRoutingModule { }
