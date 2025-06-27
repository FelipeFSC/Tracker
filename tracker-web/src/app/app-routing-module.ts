import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { RegisterTracker } from './register-tracker/register-tracker';
import { RegisterTaskTemplate } from './register-task-template/register-task-template';

const routes: Routes = [
    { path:'', component: Home },
    { path:'home', component: Home },
    { path:'tracker-register', component: RegisterTracker },
    { path:'task-template', component: RegisterTaskTemplate }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
