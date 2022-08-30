import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: "the-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit, OnChanges {
  public valueSearch: String;

  items: MenuItem[];
  itemsAdmin: MenuItem[];

  @Input() visiblePublic = false;
  @Input() visiblePrivate = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initBar();
  }

  ngOnChanges(): void {}

  private initBar(): void {
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: "/inicio",
      },
      {
        label: "Preparación",
        icon: "fa fa-solid fa-lines-leaning",
        routerLink: "/preparacion",
      },
      {
        label: "Normativa y Objetivos",
        icon: "pi pi-book",
        routerLink: "/normativa",
      },
      {
        label: "Calendario",
        icon: "pi pi-calendar",
        routerLink: "/calendario",
      },
      {
        label: "Premios",
        icon: "fa-solid fa-trophy",
        routerLink: "/premios",
      },
      {
        label: "Enlaces de Interés",
        icon: "fa fa-solid fa-link",
        routerLink: "/enlaces",
      },
      {
        label: "Patrocinadores",
        icon: "fa <i fa-solid fa-square-parking",
        routerLink: "/patrocinadores",
      },
      {
        label: "FAQ",
        icon: "fa fa-solid fa-clipboard-question",
        routerLink: "/faq",
      },
    ];

    this.itemsAdmin = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: "/inicio",
      },
      {
        label: "Preparación",
        icon: "fa fa-solid fa-lines-leaning",
        routerLink: "/preparacion",
      },
      {
        label: "Normativa y Objetivos",
        icon: "pi pi-book",
        routerLink: "/normativa",
      },
      {
        label: "Calendario",
        icon: "pi pi-calendar",
        routerLink: "/calendario",
      },
      {
        label: "Premios",
        icon: "fa-solid fa-trophy",
        routerLink: "/premios",
      },
      {
        label: "Enlaces de Interés",
        icon: "fa fa-solid fa-link",
        routerLink: "/enlaces",
      },
      {
        label: "Patrocinadores",
        icon: "fa <i fa-solid fa-square-parking",
        routerLink: "/patrocinadores",
      },
      {
        label: "FAQ",
        icon: "fa fa-solid fa-clipboard-question",
        routerLink: "/faq",
      },
      {
        label: "Admin",
        icon: "fa fa-solid fa-user-shield",
        items: [
          { label: "Inicio", icon: "pi pi-home", routerLink: "/admin/inicio" },
          {
            label: "Gestionar Preparación",
            icon: "fa fa-solid fa-lines-leaning",
            routerLink: "/admin/inicio",
          },
          { label: "Normativa", icon: "pi pi-book", routerLink: "/admin/normativa" },
          {
            label: "Gestionar Calendario",
            icon: "pi pi-calendar",
            routerLink: "admin/enlaces",
          },
          {
            label: "Gestionar Premios",
            icon: "fa-solid fa-trophy",
            routerLink: "/enlaces",
          },
          {
            label: "Gestionar Enlaces de interés",
            icon: "fa fa-solid fa-link",
            routerLink: "/enlaces",
          },
          {
            label: "Gestionar Patrocinadores",
            icon: "fa <i fa-solid fa-square-parking",
            routerLink: "/enlaces",
          },
        ],
      },
    ];
  }

  /**
   * @description: enlaza con pagina de iniciar sesión
   */
  public navigateToSigIn(): void {
    this.router.navigateByUrl("/iniciar-sesion");
  }
}
