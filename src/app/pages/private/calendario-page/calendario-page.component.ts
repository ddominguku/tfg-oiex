import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-calendario-page",
  templateUrl: "./calendario-page.component.html",
  styleUrls: ["./calendario-page.component.css"],
})
export class CalendarioPageComponent implements OnInit {

  public QRCode: string = environment.images.qr_code;

  constructor() {}

  ngOnInit(): void {}
}
