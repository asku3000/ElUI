import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';


import { HeaderComponent } from './header/header.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { UsersComponent} from './users/users.component';


import {HttpClientModule} from '@angular/common/http';
import {adminRoutingModule} from '../admin-dashboard/admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { ProviderUserService } from "./providerUser.service";
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [


    HeaderComponent,
    AdminDashboardComponent,

    UsersComponent,

    GraphsComponent
  ],
  imports: [
    FlexLayoutModule, MatSidenavModule, MatToolbarModule, adminRoutingModule, HttpClientModule, CommonModule,ChartsModule
  ],
  providers: [ProviderUserService],
  exports:[],
  bootstrap: [],
  entryComponents: []
})
export class AdminDashboardModule { }
