import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { TopratedComponent } from './toprated/toprated.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [DashboardComponent, BannerComponent, TopratedComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ]
})
export class DashboardModule { }
