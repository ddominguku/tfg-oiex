import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionsAdminPageComponent } from './editions-admin-page.component';
import { EditionsAdminPageRoutingModule } from './editions-admin-page-routing.module';
import { ThemeModule } from '../../../modules/theme.module';
import { EditionsAdminTableModule } from 'src/app/modules/oiex/editions/components/editions-admin-table/editions-admin-table.module';
import { EditionsAdminBodyModule } from 'src/app/modules/oiex/editions/components/editions-admin-body/editions-admin-body.module';



@NgModule({
  declarations: [
    EditionsAdminPageComponent
  ],
  imports: [
    CommonModule,
    EditionsAdminPageRoutingModule,
    ThemeModule,
    EditionsAdminTableModule,
    EditionsAdminBodyModule
  ]
})
export class EditionsAdminPageModule { }
