import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {path:'auth', component:AuthComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path:'', redirectTo:'auth'}
    ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProviderRoutingModule{

}