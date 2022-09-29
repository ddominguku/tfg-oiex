import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { LinkModel } from "../../models/link.model";
import { LinkService } from "../../services/links.service";


@Component({
  selector: "app-links-list",
  templateUrl: "./links-list.component.html",
  styleUrls: ["./links-list.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class LinksListComponent implements OnInit {
  public linksList: LinkModel[] = [];

  constructor(private linkService: LinkService) {}
  ngOnInit(): void {
    this.loadlinks();
  }

  /**
   * Load all links
   */
  private loadlinks() {
    this.linkService.getLinks().subscribe((linksReturn: LinkModel[]) => {
      this.linksList = [...linksReturn];
      console.log(this.linksList);
    });
  }
}
