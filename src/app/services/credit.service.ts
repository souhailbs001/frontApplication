import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Credit } from '../model/credit';
import { environment } from 'src/environments/environment';
import { CreditInteretConstant } from '../model/creditInteretConstant';
@Injectable({
    providedIn: 'root', 
  })
  export class CreditService {
    private  apiServerUrl = environment.apiBaseUrlEngagement ;
    constructor(private http: HttpClient) { }

    public listCredit(): Observable<Credit[]> {
        return this.http.get<Credit[]>(this.apiServerUrl+`/ListCredit`);
      }
    
      public tableauAmortissement(creditInteretConstant : CreditInteretConstant): Observable <CreditInteretConstant> {

        return this.http.post<CreditInteretConstant>(this.apiServerUrl + `/amortissementConstant/table`, creditInteretConstant );

      }

      public getAllCredit(): Observable<CreditInteretConstant[]> {
        return this.http.get<CreditInteretConstant[]>(this.apiServerUrl+`/amortissementConstant/demandeCreditList`);
      }

      public accepterCredit(id: any ){
        return this.http.put(this.apiServerUrl+`/amortissementConstant/accepterCredit/`+id,null );
      }
      public refuserCredit(id: any) {
        return this.http.put(this.apiServerUrl+`/amortissementConstant/refuserCredit/`+id,null);
      }

      public saveCreditInteretConstant(creditInteretConstant: CreditInteretConstant) {
        return this.http.post<CreditInteretConstant>(this.apiServerUrl+`/amortissementConstant/saveCreditInteretConstant`, creditInteretConstant);
      }

      public onSearchCompte(rib: any):Observable<any>{
        return this.http.get(this.apiServerUrl+"/amortissementConstant/listCompte/getCompte/" + rib);
      }

      

  }