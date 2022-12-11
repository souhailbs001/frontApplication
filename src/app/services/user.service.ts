import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UserAuthService } from './user-auth.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private securityBaseUrl = environment.securityBaseUrl ;
  requestHeader = new HttpHeaders(
    {"No-Auth" :"true"}
  );


  constructor(private httpClient: HttpClient, private userAuthService : UserAuthService ) { }

  public login(loginData) {
    return this.httpClient.post(this.securityBaseUrl + "/authenticate" , loginData , {headers : this.requestHeader});
  }

  public forUser() {
    return this.httpClient.get(this.securityBaseUrl + '/api/listCompte', {
      responseType: 'text',
    });
  }

  


  public forAdmin() {
    return this.httpClient.get(this.securityBaseUrl + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    
    const userRoles: any = this.userAuthService.getRoles();
  

    if (userRoles != null && userRoles) {

      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
           
            return isMatch;
          } else {
            
            return isMatch;
          }
        }
      }
    }
  }
}
