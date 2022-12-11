import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  validateForm!: FormGroup;
  inputValue?: string;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  constructor(private fb: FormBuilder ,private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      
      incident: [null, [Validators.required]],
      objet: [null, [Validators.required]],
      commentaire: [null, [Validators.required]]

    });
    
  }

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
