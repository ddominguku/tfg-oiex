import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainLayoutComponent } from "./theme/layouts/main-layout/main-layout.component";
import { HeaderComponent } from "./theme/components/header/header.component";
import { MenuItemComponent } from "./theme/components/menu-item/menu-item.component";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TheBoxPanelComponent } from "./theme/components/the-box-panel/the-box-panel.component";
import { PanelModule } from "primeng/panel";
import { ButtonComponent } from "./theme/components/button/button.component";
import { TranslateModule } from "@ngx-translate/core";
import { InputTextComponent } from "./theme/components/input-text/input-text.component";
import { CarouselComponent } from "./theme/components/carousel/carousel.component";
import { CarouselModule } from "primeng/carousel";
import { CalendarComponent } from "./theme/components/calendar/calendar.component";
import { CalendarModule } from "primeng/calendar";
import {ToolbarModule} from 'primeng/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import {EditorModule} from 'primeng/editor';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    TheBoxPanelComponent,
    ButtonComponent,
    InputTextComponent,
    CarouselComponent,
    CalendarComponent,
  ],
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    PanelModule,
    TranslateModule,
    CarouselModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    SplitButtonModule,
    FontAwesomeModule,
    TableModule,
    FieldsetModule,
    TabViewModule,
    ImageModule,
    DialogModule,
    PanelMenuModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ChipModule,
    CalendarModule,
    EditorModule,
    GalleriaModule
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    ButtonComponent,
    InputTextComponent,
    PanelModule,
    CarouselComponent,
    CalendarComponent,
    FormsModule,
    TableModule,
    TabViewModule,
    ImageModule,
    DialogModule,
    PanelMenuModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ChipModule,
    CalendarModule,
    EditorModule,
    GalleriaModule
  ],
})
export class ThemeModule {}
