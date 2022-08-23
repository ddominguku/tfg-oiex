import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "the-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit {
  
  public valueSearch: String;
  
  items: MenuItem[];
  itemsMyCount:MenuItem[];

   @Input() visible = true;


  constructor(private router: Router) {}

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
        icon: "fa fa-solid fa-address-card",
        routerLink: '/inscripciones',
      },
      {
        label: "Preparación",
        icon: "fa fa-solid fa-lines-leaning",
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
        icon: "fa-solid fa-trophy",
        routerLink: '/premios',
      },
      {
        label: "Enlaces de Interés",
        icon: "fa fa-solid fa-link",
        routerLink: '/enlaces',
      },
      {
        label: "Patrocinadores",
        icon: "fa <i fa-solid fa-square-parking",
        routerLink: '/patrocinadores',
      },
      {
        label: "FAQ",
        icon: "fa fa-solid fa-clipboard-question",
        routerLink: '/faq',
      },
      
    ];

    this.itemsMyCount = [
      {
        label: "Administrar cuenta",
        routerLink: '/manage-account',
      },
      {
        label: "Cambiar Contraseña",
        routerLink: '/change-password',
      },
      
    ];
  }

  /**
   * @description: enlaza con pagina de iniciar sesión
   */
   public navigateToSigIn():void {
    this.router.navigateByUrl('/iniciar-sesion');
    }
}
