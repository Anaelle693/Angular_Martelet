import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  public version$ = new BehaviorSubject(1);

  constructor() { }
}
