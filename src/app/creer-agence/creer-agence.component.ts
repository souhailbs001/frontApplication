import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Agence } from '../model/agence';
import { AgenceService } from '../services/agence.service';


@Component({
  selector: 'app-creer-agence',
  templateUrl: './creer-agence.component.html',
  styleUrls: ['./creer-agence.component.css']
})
export class CreerAgenceComponent implements OnInit {
  validateForm!: FormGroup;
  agence : Agence;


  constructor(private fb: FormBuilder, private agenceService : AgenceService) { 
    this.agence = new Agence();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      libcou: [null, [Validators.required]],
      liblon: [null, [Validators.required]],
      codeInterne: [null, [Validators.required]],

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

  onSaveAgence(): void {
    this.agenceService.saveAgence(this.agence).subscribe(response => console.log(response));

    }

}
