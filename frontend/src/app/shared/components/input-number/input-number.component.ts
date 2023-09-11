import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {
  @Input() myModel: any;
  @Output() myModelChange = new EventEmitter<any>();
  @Input() idName?: string;

  ngChangeEvent(text:any) {
    this.myModelChange.emit(text);
  }

}
