import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',

})
export class ClientService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  public listClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/api/listClient`);
  }

  public addClient(client: Client): Observable<Client[]> {
    return this.http.post<Client[]>(`${this.apiServerUrl}/api/addClient`, client);
  }

  
}
