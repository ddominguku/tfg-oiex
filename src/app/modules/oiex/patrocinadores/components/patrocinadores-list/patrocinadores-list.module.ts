import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatrocinadoresListComponent } from "./patrocinadores-list.component";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [PatrocinadoresListComponent],
  imports: [CommonModule, ThemeModule, TranslateModule,CardModule ],
  exports: [PatrocinadoresListComponent],
})
export class PatrocinadoresListModule {}
