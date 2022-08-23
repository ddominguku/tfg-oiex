import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-the-box-panel',
  templateUrl: './the-box-panel.component.html',
  styleUrls: ['./the-box-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TheBoxPanelComponent {

  @Input() panelName: string;
  @Input() title: string;
  @Input() collapsed = false;
  @Input() collapsible = true;

  constructor() { }


}
