import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnlacesPageComponent } from './enlaces-page.component';

const routes: Routes = [
  {
    path: '',
    component: EnlacesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnlacesPageRoutingModule {}