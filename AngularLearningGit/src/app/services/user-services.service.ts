import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

  getUser() {
    return of ([
      {name: 'John', age: 25},
      {name: 'Jane', age: 30},
      {name: 'Bob', age: 35}
    ]);
  }
}
