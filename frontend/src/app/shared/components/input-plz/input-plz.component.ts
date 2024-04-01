import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'input-plz',
  templateUrl: './input-plz.component.html',
  styleUrls: ['./input-plz.component.css']
})
export class InputPlzComponent {
  @ViewChild('plzModel', {static: true}) private plzModel!: FormControl;

  @Input() myModel: any;
  @Output() myModelChange = new EventEmitter<any>();
  @Input() idName?: string;

  ngChangeEvent(text:any) {
    this.myModelChange.emit(text);
  }

  isInvalid() {
    if (this.plzModel != null) return this.plzModel.invalid; else return false;
  }
}
