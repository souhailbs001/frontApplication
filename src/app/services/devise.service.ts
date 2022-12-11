
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Currency } from '../model/currency';

@Injectable({
    providedIn: 'root',
  
  })
  export class DeviseService {
    private apiServerUrl = environment.apiBaseUrl ;
  
    constructor(private http: HttpClient) { }
  
    public listClient(): Observable<Currency[]> {
      return this.http.get<Currency[]>(`${this.apiServerUrl}/api/listCurrency`);
    }
}