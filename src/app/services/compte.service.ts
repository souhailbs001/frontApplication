import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Compte } from '../model/compte';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',

})
export class CompteService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  public listCompte(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiServerUrl}/api/listCompte`);
  }

  public onSearchCompte(rib: any):Observable<any>{
    return this.http.get(this.apiServerUrl+"/api/listCompte/getCompte/" + rib);
  }

  public addCompte(compte: Compte): Observable<Compte[]> {
    return this.http.post<Compte[]>(`${this.apiServerUrl}/api/saveCompte`, compte);
  }

  
  /* public saveCompte(client: Client): Observable<Compte> {
    return this.http.post<Compte>(`${this.apiServerUrl}/api/saveCompte`, client);
  } */

  public saveCompte(id: any) {
    return this.http.get(this.apiServerUrl+"/api/saveAccount2/"+ id);
  }


  public deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/deleteCompteById, ${id}`);
  }

  public updateCompte(compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiServerUrl}/api/updateCompte`, compte);
  }

  

}
