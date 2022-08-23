import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "the-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {

  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string;
  @Input() visible = true;
  @Output() onClick = new EventEmitter();

  constructor() {}


   /**
   * Método que se llama al clicar sobre el botón
   *
   * @protected
   * @param {*} event
   * @memberof ButtonComponent
   */
    public onClickEvent(event) {
      event.cancelBubble = true;
      this.onClick.emit(event);
    }
}
