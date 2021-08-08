import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventsQuery } from '../state/events.query';
import { EventsService } from '../state/events.service';
import { Event } from "../state/event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  fromPlaceholder: string;
  toPlaceholder: string;
  events$: Observable<Event[]>

  constructor(private eventsService: EventsService, private eventsQuery: EventsQuery) {
    const today = new Date();
    this.fromPlaceholder = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
    this.toPlaceholder = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() + 7}`

    this.events$ = this.eventsQuery.selectAll();
  }

  searchForm = new FormGroup({
    keyword: new FormControl(),
    from: new FormControl(),
    to: new FormControl()
  });

  search() {
    this.eventsService.get("Angular", new Date(2021, 7, 1), new Date(2021, 9, 1)).subscribe((response) => { console.log(response) })
  }

  trackById(_: number, value: Event): number | null {
    return value ? value.event_id : null;
  }

}
