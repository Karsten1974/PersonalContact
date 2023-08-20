import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'grid-column',
  template: '<ng-content></ng-content>'
})
export class GridColumnComponent {
  @HostBinding('class') class = "col-12 md:col-6"; // Alternative zu <grid-column class="col-12 md:col-6">
}
