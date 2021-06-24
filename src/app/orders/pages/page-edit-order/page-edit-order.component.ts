import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public item$!: Observable<Order>;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrdersService) {
    this.route.paramMap.subscribe((params) => {
    const id = Number(params.get('id'));
    this.item$ = this.orderService.getItemById(id);
   });
  }

  public edit(item: Order): void{
    this.orderService.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    })
  }

  ngOnInit(): void {
  }

}
