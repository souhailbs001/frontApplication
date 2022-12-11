import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  isLoadingTwo = false;
  

  
  constructor( public userAuthService : UserAuthService,
     public userService : UserService,
     private router : Router) {}

  ngOnInit(): void {
   // console.log(this.userService.roleMatch('User'));

  }

   public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  } 
  


}
