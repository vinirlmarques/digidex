import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DigidexComponent } from './digidex/digidex.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'digidex', component: DigidexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
