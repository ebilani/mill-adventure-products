import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  categoryList: BehaviorSubject<any> = new BehaviorSubject([]);
  imageUrl: string = "https://images.takeshape.io/";
  constructor() { }
}
