// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app_name: "OIEX",

  apis: {
    oiex: {
      baseUrl: 'http://localhost:8080/api',
      endpoints: {
        person: '/person',
        award: '/award',
        patrocinadores: '/patrocinadores',
        //usersDashboards: '/dashboards',
      },
    }},

  images: {
    header: "assets/images/cabecera-oiex.jpg",
    qr_code: "assets/images/CodigoQR_2022.png",
    carousel_1: "assets/images/carousel_1.jpg",
    carousel_2: "assets/images/carousel_2.jpg",
    carousel_3: "assets/images/carousel_3.jpg",
    registro: "assets/images/registro.jpg",
    login: "assets/images/login.jpg",
    ipad: "assets/images/ipad.jpg",
  },

  calendar_locale: {
    es: {
      firstDayOfWeek: 1,
      dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthNamesShort: [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic",
      ],
      today: "Hoy",
      clear: "Borrar",
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
