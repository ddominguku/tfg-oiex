import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'the-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  public imgHeader = environment.images.header;

  constructor() { }

  ngOnInit(): void {
  }

}
