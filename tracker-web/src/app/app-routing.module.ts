import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { RegisterTaskTemplate } from './register-task-template/register-task-template';
import { Upload } from './upload/upload';

const routes: Routes = [
    { path:'', component: Home },
    { path:'home', component: Home },
    { path:'tracker', loadChildren: () => import('./tracker/tracker-routing.module').then(m => m.TrackerRoutingModule) },
    { path:'task-template', component: RegisterTaskTemplate },
    { path:'upload', component: Upload }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
