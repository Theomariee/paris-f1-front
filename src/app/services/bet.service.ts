import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../models/bet.model';
const baseUrl = 'http://localhost:8080/api/bets';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Bet[]> {
    return this.http.get<Bet[]>(baseUrl);
  }

}
