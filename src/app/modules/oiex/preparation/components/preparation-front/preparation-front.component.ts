import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home/services/home.service';
import { PreparationModel } from '../../models/preparation.model';

@Component({
  selector: 'app-preparation-front',
  templateUrl: './preparation-front.component.html',
  styleUrls: ['./preparation-front.component.css']
})
export class PreparationFrontComponent implements OnInit {

  front: string = "";

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadFront();
  }

  private loadFront() {
    this.homeService
      .getPreparation(1)
      .subscribe((frontReturn: PreparationModel) => {
        this.front = frontReturn.body;
      });
  }

}
