import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Rdv } from '../model/rdv';
@Injectable({
    providedIn: 'root', 
  })
  export class RdvService {

    constructor(private http: HttpClient) { }

    public listRdv(): Observable<Rdv[]> {
        return this.http.get<Rdv[]>(`http://localhost:8091/api/rdvs`);
      }

      public addRdv(rdv : Rdv): Observable<Rdv> {
        return this.http.post<Rdv>(`http://localhost:8091/api/addRdv`, rdv);
      }
      public save(rdv: Rdv) {
        return this.http.post<Rdv>(`http://localhost:8091/api/addRdv`, rdv);
      }
     
      public accepterRdv(id: any , rdv:Rdv){
        return this.http.put(`http://localhost:8091/api/accepterRdv/`+id , rdv);
      }
      public refuserRdv(id: any,rdv:Rdv) {
        return this.http.put(`http://localhost:8091/api/refuserRdv/`+id,rdv);
      }

      public findRdvById(id: number): Observable<Rdv> {
        return this.http.get<Rdv>(`http://localhost:8091/api/findRdvById/${id}`);
      }

  }