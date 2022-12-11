import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  isLoadingTwo = false;

  constructor(private userAuthService : UserAuthService,
    public userService : UserService,
    private router : Router) { }

  ngOnInit(): void {

  } 
  
  logout() {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 1000);
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
  
  
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

}
