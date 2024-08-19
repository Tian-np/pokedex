import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
  _timeout: any = null;

  search = new FormGroup({
    text: new FormControl(""),
  })

  sendSearch() {
    this.searchEvent.emit(this.search);
  }
}
