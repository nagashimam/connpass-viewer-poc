import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { ApiResponse, Event } from './event.model';
import { EventsStore } from './events.store';

@Injectable({ providedIn: 'root' })
export class EventsService {

  private readonly CONNPASS_API = "https://connpass.com/api/v1/event/"
  constructor(private eventsStore: EventsStore, private http: HttpClient) {
  }

  // FIXME: 通信エラーのハンドリングどうしよう?
  // FIXME: レスポンスの最大件数どうしよう?
  get(keyword: string, from: Date, to: Date) {
    const endpoint = this.CONNPASS_API + "?" + this.getQueryParameters(keyword, from, to);
    return this.http.get<ApiResponse>(endpoint).pipe(tap(response => {
      this.eventsStore.upsertMany(response.events);
    }));
  }

  private getQueryParameters(keyword: string, from: Date, to: Date) {
    const keywordQueryParameter = this.getKeywordQueryParameter(keyword);
    const dateQueryParameter = this.getDateQueryParameter(from, to);
    const tmp = keywordQueryParameter + dateQueryParameter;
    return tmp.substr(0, tmp.length - 1);
  }

  private getKeywordQueryParameter(keyword: string): string {
    if (keyword) {
      return keyword.split(" ").map(word => `keyword_or=${word}&`).join("");
    } else {
      return "&"
    }
  }

  private getDateQueryParameter(from: Date, to: Date): string {
    const pad = (num: number) => String(num).padStart(2, '0');
    if (from && to) {
      const dates = this.getDatesBetween(from, to);
      return dates.map(date => `ymd=${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}&`).join("");
    } else if (from) {
      return `ymd=${from.getFullYear()}${pad(from.getMonth() + 1)}${pad(from.getDate())}&`
    } else if (to) {
      return `ymd=${to.getFullYear()}${pad(to.getMonth() + 1)}${pad(to.getDate())}&`
    } else {
      return "";
    }
  }

  private getDatesBetween(from: Date, to: Date, dates: Date[] = []): Date[] {
    if (from <= to) {
      const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
      dates.push(date);
      from.setDate(from.getDate() + 1);
      return this.getDatesBetween(from, to, dates);
    } else {
      // console.log("dates", dates);
      return dates;
    }
  }

  add(event: Event) {
    this.eventsStore.add(event);
  }

  updateGroup(groupId: string, event: Partial<Event>) {
    this.eventsStore.update(groupId, event);
  }

  remove(id: ID) {
    this.eventsStore.remove(id);
  }

}
