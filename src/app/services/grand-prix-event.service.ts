import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrandPrixEvent } from '../models/grand-prix-event.model';
const baseUrl = 'http://localhost:8080/api/grand-prix-events';

@Injectable({
  providedIn: 'root',
})
export class GrandPrixEventService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<GrandPrixEvent[]> {
    return this.http.get<GrandPrixEvent[]>(baseUrl);
  }
  get(id: any): Observable<GrandPrixEvent> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
