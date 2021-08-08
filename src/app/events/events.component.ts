import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  fromPlaceholder: string;
  toPlaceholder: string;

  constructor() {
    const today = new Date();
    this.fromPlaceholder = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
    this.toPlaceholder = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() + 7}`
  }

  searchForm = new FormGroup({
    keyword: new FormControl(),
    from: new FormControl(),
    to: new FormControl()
  });

  ngOnInit(): void {

  }

}
