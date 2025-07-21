import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
// import { RegisterTracker } from './tracker/tracker-register/tracker-register';
import { RegisterTaskTemplate } from './register-task-template/register-task-template';

const routes: Routes = [
    { path:'', component: Home },
    { path:'home', component: Home },
    { path:'tracker', loadChildren: () => import('./tracker/tracker-routing.module').then(m => m.TrackerRoutingModule) },
    // { path:'tracker-register', component: RegisterTracker },
    { path:'task-template', component: RegisterTaskTemplate }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
