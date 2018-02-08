import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProviderhomeComponent } from "./providerhome/providerhome.component";



const routes: Routes = [
    { path: '', component: ProviderhomeComponent },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProviderRoutingModule {}
