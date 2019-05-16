import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works/how-it-works.component';
import { HomeComponent } from './sections/home/home.component';
import { CreditorsComponent } from './sections/creditors/creditors/creditors.component';
import { OriginatorsComponent } from './sections/originators/originators.component';


export const routes: Routes = [
  {  path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'creditors', component: CreditorsComponent },
  { path: 'originators', component: OriginatorsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {
    path: '**',
    redirectTo: '/404'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
