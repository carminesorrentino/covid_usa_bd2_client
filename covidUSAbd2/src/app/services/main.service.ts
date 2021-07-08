import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private pagination: BehaviorSubject<string> = new BehaviorSubject(null);

  item$ = this.pagination.asObservable();

  setPagination(pagination_item: string) {
    this.pagination.next(pagination_item);
  }

}
