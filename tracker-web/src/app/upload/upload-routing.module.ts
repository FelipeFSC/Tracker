import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Upload } from "./upload";

const uploadRoutes: Routes = [
    { path: '', component: Upload },
];

@NgModule({
    imports: [RouterModule.forChild(uploadRoutes)],
    exports: [RouterModule]
})
export class UploadRoutingModule {

}