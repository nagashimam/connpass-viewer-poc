import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsQuery } from '../state/events.query';
import { Event } from "../state/event.model";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  // FIXME: undefinedのときどうするか考える(ありえないはずだけど)
  event$: Observable<Event | undefined> = of();

  constructor(private activatedRoute: ActivatedRoute, private eventsQuery: EventsQuery, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.event$ = this.eventsQuery.selectEntity(params.event_id);
    });
  }

  goToDetails(event: Event) {
    this.router.navigateByUrl(`/events/details?event_id=${event.event_id}`);
  }

}
