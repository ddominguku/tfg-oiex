import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './theme/layouts/main-layout/main-layout.component';
import { HeaderComponent } from './theme/components/header/header.component';



@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  exports: [MainLayoutComponent, HeaderComponent]
})
export class ThemeModule { }
