import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionsListComponent } from './editions-list.component';
import { ThemeModule } from '../../../../theme.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    EditionsListComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    TranslateModule
  ],
  exports: [EditionsListComponent]
})
export class EditionsListModule { }
