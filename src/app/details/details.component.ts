import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsQuery } from '../state/events.query';
import { Event } from "../state/event.model";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // FIXME: undefinedのときどうするか考える(ありえないはずだけど)
  event$: Observable<Event | undefined> = of();

  constructor(private activatedRoute: ActivatedRoute, private eventsQuery: EventsQuery) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.event$ = this.eventsQuery.selectEntity(params.event_id);
    });
  }
}
