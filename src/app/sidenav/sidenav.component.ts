import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( public userAuthService : UserAuthService,
    public userService : UserService,
    private router : Router) { 
    
  }

  isCollapsed = true;
  isLoadingTwo = false;

 
  ngOnInit(): void {
    
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
