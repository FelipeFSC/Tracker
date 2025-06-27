import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Home } from "./home";

const homeRoutes: Routes = [
    { path:'', component: Home }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}