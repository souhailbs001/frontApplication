import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoadingTwo = false;


  constructor(private userAuthService : UserAuthService,
    private router : Router) { }

  ngOnInit(): void {
    
      this.isLoadingTwo = true;
      setTimeout(() => {
        this.isLoadingTwo = false;
      }, 1000);
      this.userAuthService.clear();
      this.router.navigate(['/login']);
    
  }

  

}
