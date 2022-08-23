import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "the-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class InputTextComponent {
  @ViewChild('inputElement') inputElement: ElementRef;
  @Input() class: String;
  @Input() icon: String;
  @Input() name: String;
  @Input() type: String = "text";
  @Input() placeholder: String = "";
  @Input() label: String = "";
  @Input() size: string = '30';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() floatLabel: boolean = true;
  @Input() readOnly: boolean = false;

  /**
   * Evento emitido al cambio del contenido del input
   *
   * @memberof InputTextComponent
   */
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<string>();

  public value: string = '';

  // tslint:disable-next-line:ban-types
  propagateChange: Function = (value: any) => {};
  // tslint:disable-next-line:ban-types
  propagateTouched: Function = () => {};

  constructor() {}

  /**
   * Método que se llama al cambiar el valor del input
   *
   * @param {*} event
   * @memberof InputTextComponent
   */
   public handleValueChange(value) {
    this.value = value;
    // Propaga el cambio a la vista necesario para
    this.propagateChange(this.value);
    // Emite el cambio
    this.onChange.emit(this.value);
  }

  /**
   * Evento que se ejecuta en el blur del control y propaga el touched
   *
   *
   * @memberOf InputTextComponent
   */
  onBlur() {
    this.propagateTouched();
  }

  // Métodos para implementar el interfaz ControlValueAccessor
  writeValue(value: any): void {
    if (value !== undefined) this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setFocus() {
    this.inputElement.nativeElement.focus();
  }
}
