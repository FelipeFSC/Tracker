import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterTracker } from "./register-tracker";

const registerTrackerRoutes: Routes = [
    { path:'', component: RegisterTracker }
];

@NgModule({
    imports: [RouterModule.forChild(registerTrackerRoutes)],
    exports: [RouterModule]
})
export class RegisterTrackerRoutingModule {

}