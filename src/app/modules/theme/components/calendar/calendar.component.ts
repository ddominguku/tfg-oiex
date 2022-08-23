import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleSettings } from 'primeng/calendar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'the-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  public es: any;

  @Input() label: String;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.es = {
      //date
      closeText: "Cerrar",
      prevText: "<Ant",
      nextText: "Sig>",
      currentText: "Hoy",
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
      "julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun",
      "jul","ago","sep","oct","nov","dic" ],
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      weekHeader: "Sm",
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "", 

      //time
      timeOnlyTitle: 'Elegir una hora',
      timeText: 'Hora',
      hourText: 'Horas',
      minuteText: 'Minutos',
      secondText: 'Segundos',
      millisecText: 'Milisegundos',
      microsecText: 'Microsegundos',
      timezoneText: 'Uso horario',
      timeFormat: 'HH:mm',
      timeSuffix: '',
      amNames: ['a.m.', 'AM', 'A'],
      pmNames: ['p.m.', 'PM', 'P'],
  };
  }


}
