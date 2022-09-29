import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { HomeEditorModel } from "../../models/home-editor.model";

@Component({
  selector: "app-home-front",
  templateUrl: "./home-front.component.html",
  styleUrls: ["./home-front.component.css"],
})
export class HomeFrontComponent implements OnInit {
  front: string = "";

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadFront();
  }

  private loadFront() {
    this.homeService
      .getBodyEditor(1)
      .subscribe((frontReturn: HomeEditorModel) => {
        this.front = frontReturn.body;
      });
  }
}
