import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../../../theme.module";
import { TranslateModule } from "@ngx-translate/core";
import {CardModule} from 'primeng/card';
import { SponsorsListComponent } from "./sponsors-list.component";

@NgModule({
  declarations: [SponsorsListComponent],
  imports: [CommonModule, ThemeModule, TranslateModule,CardModule ],
  exports: [SponsorsListComponent],
})
export class SponsorListModule {}
