import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DigidexComponent } from './digidex/digidex.component';
import { DigiguestComponent } from './digiguest/digiguest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'digidex', component: DigidexComponent },
  { path: 'digiguest', component: DigiguestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
