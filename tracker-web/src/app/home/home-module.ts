import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing-module'
import { Home } from './home'
import { MaterialModule } from '../material/material.module'
import { ToolbarModule } from '../toolbar/toolbar-module'

@NgModule({
    declarations: [
        Home
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        ToolbarModule,
    ]
})
export class HomeModule { }
