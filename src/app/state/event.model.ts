export interface ApiResponse {
  events: Event[],
  resultsAvailable: number,
  resultsReturned: number,
  resultsStart: number
}

export interface Event {
  address: string;
  catch: string;
  description: string;
  ended_at: Date;
  event_id: number;
  series: Group;
  started_at: Date;
  title: string;
  event_url: string;
}

export interface Group {
  id: number;
  title: string;
  url: string;
}