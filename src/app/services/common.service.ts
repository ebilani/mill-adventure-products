import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  categoryList: BehaviorSubject<any> = new BehaviorSubject([]);
  changedProductId: BehaviorSubject<string> = new BehaviorSubject("");
  constructor() { }
}
