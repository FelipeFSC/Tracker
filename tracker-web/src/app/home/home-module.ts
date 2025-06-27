import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { MaterialModule } from '../material/material-module';
import { ToolbarModule } from '../toolbar/toolbar-module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        Home
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        MaterialModule,
        ToolbarModule
    ]
})
export class HomeModule { }
