import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SponsorModel } from "../../models/sponsor.model";
import { SponsorService } from "../../services/sponsor.service";

@Component({
  selector: "app-sponsors-list",
  templateUrl: "./sponsors-list.component.html",
  styleUrls: ["./sponsors-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsListComponent implements OnInit {


  public sponsorList: SponsorModel[] = [];

  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.loadSponsors();
  }

  private loadSponsors(): void {
    this.sponsorService
      .getAll()
      .subscribe((sponsorReturn: SponsorModel[]) => {
        this.sponsorList = sponsorReturn;
        console.log(this.sponsorList);
      });
  }
}
