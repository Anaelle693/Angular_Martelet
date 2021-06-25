import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection(){
    this.http.get<Client[]>(`${this.urlApi}/clients`).subscribe((data) =>{
      this.collection$.next(data)
    });
  }

  public get collection(): BehaviorSubject<Client[]>{
    return this.collection$;
  }

  public set collection(col: BehaviorSubject<Client[]>){
    this.collection$ = col;
  }
}
