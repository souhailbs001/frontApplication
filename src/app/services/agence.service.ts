import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Agence } from '../model/agence';



@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http : HttpClient) { }

  public saveAgence(agence: Agence): Observable<Agence[]> {
    return this.http.post<Agence[]>(`${this.apiServerUrl}/api/saveAgence`, agence);
  }
}
