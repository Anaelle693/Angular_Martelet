import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public item$!: Observable<Client>;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientsService) {
    this.route.paramMap.subscribe((params) => {
    const id = Number(params.get('id'));
    this.item$ = this.clientService.getItemById(id);
   });
  }

  public edit(item: Client): void{
    this.clientService.update(item).subscribe((res) => {
      this.router.navigate(['clients']);
    })
  }
  ngOnInit(): void {
  }

}
