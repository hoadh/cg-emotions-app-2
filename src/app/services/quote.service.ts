import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Quote {
  content: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient) { }
  random(): Observable<Quote> {
    return this.httpClient.get<Quote>('https://api.quotable.io/random');
  }
}
