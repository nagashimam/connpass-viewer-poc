import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventsService } from '../state/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  fromPlaceholder: string;
  toPlaceholder: string;

  constructor(private eventsService: EventsService) {
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

  search() {
    this.eventsService.get("Angular", new Date(2021, 7, 1), new Date(2021, 9, 1)).subscribe((response) => { console.log(response) })
  }

}
