import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTaskTemplate } from './register-task-template';

const registerTaskTemplateRoutes: Routes = [
    { path:'', component: RegisterTaskTemplate },
];

@NgModule({
    imports: [RouterModule.forRoot(registerTaskTemplateRoutes)],
    exports: [RouterModule]
})
export class RegisterTaskTemplateRoutingModule { }
