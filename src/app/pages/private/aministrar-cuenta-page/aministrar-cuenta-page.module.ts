import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AministrarCuentaPageComponent } from './aministrar-cuenta-page.component';
import { AdministrarCuentaPageRoutingModule } from './administrar-cuenta-page-routing.module';



@NgModule({
  declarations: [
    AministrarCuentaPageComponent
  ],
  imports: [
    CommonModule,
    AdministrarCuentaPageRoutingModule
  ]
})
export class AministrarCuentaPageModule { }
