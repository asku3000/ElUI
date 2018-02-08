import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from "./users/users.component";
import { GraphsComponent } from "./graphs/graphs.component";


const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
        children: [
            { path: '', component: GraphsComponent },
             { path: 'users', component: UsersComponent },
             { path: 'graphs', component: GraphsComponent },

        ]
    },
   
    { path: 'mydashboardadmin', component: AdminDashboardComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
    exports: [RouterModule],
    providers:[]
})
export class adminRoutingModule { }
