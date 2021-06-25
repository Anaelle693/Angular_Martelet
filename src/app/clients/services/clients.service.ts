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

  public deleteItem(id:number): Observable<Client>{
    return this.http.delete<Client>(`${this.urlApi}/clients/${id}`)
    .pipe(
      tap((res) => {
        this.refreshCollection();
      })
    );
  }

  public update(item: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item)
    .pipe(
      tap((res) => {
        this.refreshCollection();
      })
    );
  }

  // changement du statut du client
  public changeItem(item: Client, state: StateClient): Observable<Client>{
    // destruction de l'objet (opérateur spread)
    const obj = { ...item};
    // nouveau statut
    obj.state = state;
    // mise à jour de l'objet
    return this.update(obj);
  }

   // ajout d'un item dans la collection
   public add(item: Client): Observable<Client>{
    return this.http.post<Client>(`${this.urlApi}/clients`, item)
    .pipe(
      tap((res) =>{
        this.refreshCollection();
      })
    );
  }

  // get item dans la collection par son ID
  public getItemById(id: number): Observable<Client>{
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }
  /* Méthodes HTTP pour les API
   - lecture: GET
   - création: POST
   - mise à jour: PUT
   - effacement : DELETE*/
}
