import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[grid-card]',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent {
  @HostBinding('class') class = "card p-fluid";

  @Input() cardBezeichnung = '';
}
