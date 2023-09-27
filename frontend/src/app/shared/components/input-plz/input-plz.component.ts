import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'input-plz',
  templateUrl: './input-plz.component.html',
  styleUrls: ['./input-plz.component.css']
})
export class InputPlzComponent {
  @Input() myModel: any;
  @Output() myModelChange = new EventEmitter<any>();
  @Input() idName?: string;

  ngChangeEvent(text:any) {
    this.myModelChange.emit(text);
  }
}
