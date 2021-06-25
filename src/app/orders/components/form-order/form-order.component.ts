import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { StateOrder} from 'src/app/core/enums/state-order.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/clients/services/clients.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init!: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();

  public form!: FormGroup;
  public states = Object.values(StateOrder);


  // liste des clients pour menu déroulant
  public clients: Client[]= [];

  constructor(private fb: FormBuilder, private clientService: ClientsService) {
    // récupération de la liste des clients
    clientService.collection.subscribe((data) => {
      // this.clients = data;
      data.forEach((element) => {
        if(element.state !== 'INACTIVE') this.clients.push(element);
      })
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt : [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state : [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
      id: [this.init.id]
    });
  }

  public onSubmit(): void{
    this.submited.emit(this.form.value);
  }


}
