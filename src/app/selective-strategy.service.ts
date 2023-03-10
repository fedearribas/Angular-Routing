import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class SelectiveStrategy implements PreloadingStrategy{
  constructor() { }

  preload(route: Route, load: Function): Observable<any> {
    if (route && route.data['preload']) {
      load();
    }

    return of(null);
  }

}