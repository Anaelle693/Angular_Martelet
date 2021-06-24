import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public states = Object.values(StateOrder);
  public collection$: Subject<Order[]>; //pour les données
  public headers: string[]; //pour les entêtes des tableaux

  constructor(private orderService: OrdersService, private router : Router) {
    // récupération des données depuis l'API (via le service)
    this.collection$ = this.orderService.collection;

    // création des entêtes du tableau
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'Nombre Jours',
      'Tmj HT',
      'TVA',
      'Total HT',
      'Total TTC',
      'Comment',
      "State"
    ];
  }
  changeState(item: Order, event: any): void{
    const state = event.target.value;
    this.orderService.changeItem(item, state).subscribe((data) =>{
      item = data;

    });
  }

  gotoEdit(id: number): void{
    this.router.navigate(['orders', 'edit', id]);
  }

  deleteItem(id: number): void{
    this.orderService.deleteItem(id).subscribe();
  }

  ngOnInit(): void {
  }

}
