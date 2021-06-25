import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$ !: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);

  constructor(private clientService: ClientsService, private router: Router) {
    // récupération des données depuis le service
    this.collection$ = clientService.collection;

    // entêtes du tableau HTML
    this.headers = [
      'Actions',
      'ID',
      'Name',
      'Total CA HT',
      'TVA',
      'Total CA TTC',
      'Commentaire',
      'Etat'
    ]
   }

  ngOnInit(): void {
  }

}
