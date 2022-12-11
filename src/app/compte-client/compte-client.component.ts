import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Client } from '../model/client';


import { countries } from '../model/countries-data-store';
import { ClientService } from '../services/client.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css'],

})
export class CompteClientComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  client: Client;
  public countries: any = countries;
  selectedValue = null;

  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;



  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }


  }

  constructor(private fb: FormBuilder ,private httpClient : HttpClient,private clientService : ClientService) {
    this.client = new Client();

  }

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      nomPere: [null, [Validators.required]],
      nomMere: [null, [Validators.required]],
      phoneNumberPrefix: ['+216'],
      phoneNumber: [null, [Validators.required]],

    });
    
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onSaveClient(): void {
    this.clientService.addClient(this.client).subscribe(response => console.log(response));

    }
  

    

}




