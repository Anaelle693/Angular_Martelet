import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  // private collection
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  private urlApi = environment.urlApi;


  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  private refreshCollection(){
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe((data)=> {
      this.collection$.next(data);
    });
  }
}
