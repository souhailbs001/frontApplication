import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

 

  constructor(private fb: FormBuilder, 
  private userService : UserService,
  private userAuthService : UserAuthService,
  private router : Router) { }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  
  }


   login(loginForm) {
     this.userService.login(loginForm.value).subscribe(
       (response:any) => {
         console.log(response.jwtToken);
         console.log(response.user.role);
         this.userAuthService.setRoles(response.user.role);
         this.userAuthService.setToken(response.jwtToken);

         const role = response.user.role[0].roleName;
         if(role ==='Admin') {
           this.router.navigate(['/compteClient']);
          } else{
            if(role ==='User') {
              this.router.navigate(['/listCompte']);
            }
             
           }
         
       },
       (error) => {
         console.log(error);
       }
     
     );

    console.log("form is submitted");
    console.log(loginForm.value);

  }
}
