import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CalendarEvent } from 'calendar-utils';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http: HttpClient) { }
  url: 'http://localhost:3000/data';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  task: any;
  // events: CalendarEvent[];
  getTask(): Observable<any> {
    return this.http.get('http://localhost:3000/data');
  }

  postTask(event): Observable<any> {
    return this.http.post(this.url, event, this.httpOptions);
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete('http://localhost:3000/data/' + id);
  }

  getDetailTask(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/data/' + id);
  }

  updateTask(id: any): Observable<any> {
    return this.http.put('http://localhost:3000/data/' + id, this.task);
  }
}
