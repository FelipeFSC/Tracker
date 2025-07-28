import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TrackerRegister } from "./tracker-register/tracker-register";
import { Tracker } from "./tracker";

const trackerRoutes: Routes = [
    { path: '', component: Tracker },
    { path: 'register', component: TrackerRegister },
    { path: 'register/:date', component: TrackerRegister },
    { path: ':trackerId/register', component: TrackerRegister }
];

@NgModule({
    imports: [RouterModule.forChild(trackerRoutes)],
    exports: [RouterModule]
})
export class TrackerRoutingModule {

}