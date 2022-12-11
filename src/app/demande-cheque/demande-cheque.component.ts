import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-demande-cheque',
  templateUrl: './demande-cheque.component.html',
  styleUrls: ['./demande-cheque.component.css']
})
export class DemandeChequeComponent implements OnInit {
  validateForm!: FormGroup;
  inputValue?: string;
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


  constructor(private fb: FormBuilder ,private httpClient : HttpClient) { }

 


  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      
      compte: [null, [Validators.required]],
      barré: [null, [Validators.required]],
      typeCheqiuer: [null, [Validators.required]],
      nbChequier: [null, [Validators.required]],
      raison: [null, [Validators.required]]

    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  onSubmit() {
    
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

}
