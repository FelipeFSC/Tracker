import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';
import { MaterialModule } from '../material/material-module';
import { ToolbarModule } from '../toolbar/toolbar-module';
import { Upload } from './upload';

@NgModule({
    declarations: [
        Upload
    ],
    imports: [
        UploadRoutingModule,
        CommonModule,
        MaterialModule,
        ToolbarModule
    ],
    providers: [
        DatePipe
    ]
})
export class UploadModule { }
