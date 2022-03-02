import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "the-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit {
  
  public valueSearch: String;
  
  items: MenuItem[];


  constructor() {}

  ngOnInit(): void {
    this.initBar();
  }

  private initBar(): void {
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: '/inicio',
      },
      {
        label: "Inscripciones",
        icon: "pi pi-envelope",
        routerLink: '/inscripciones',
      },
      {
        label: "Preparación",
        icon: "pi pi-reddit",
        routerLink: '/preparacion',
      },
      {
        label: "Normativa y Objetivos",
        icon: "pi pi-book",
        routerLink: '/normativa',
      },
      {
        label: "Calendario",
        icon: "pi pi-calendar",
        routerLink: '/calendario',
      },
      {
        label: "Premios",
        icon: "pi pi-pound",
        routerLink: '/premios',
      },
      {
        label: "Enlaces de Interés",
        icon: "pi-external-link",
        routerLink: '/enlaces',
      },
    ];
  }
}
