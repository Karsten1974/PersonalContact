import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() myModel: any; //muss myModel heissen. ngModel geht nicht
  @Output() myModelChange = new EventEmitter<any>();
  @Input() idName?: string;

  ngChangeEvent(text:any) {
    this.myModelChange.emit(text);
  }
}
