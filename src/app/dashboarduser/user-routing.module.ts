import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserhomeComponent } from "./userhome/userhome.component";
import { AuthguardGuard } from '../authguard.guard';


const routes: Routes = [
        { path: '',
        canActivate: [AuthguardGuard],
         component: UserhomeComponent 
        },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
