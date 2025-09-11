import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class SampleTestService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  getdata(): string[] {
    return ['data1', 'data2', 'data3'];
  }
}
