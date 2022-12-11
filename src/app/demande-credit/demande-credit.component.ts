import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AmortissementConstant } from '../model/amortissementConstant';
import { CreditInteretConstant } from '../model/creditInteretConstant';
import { CreditService } from '../services/credit.service';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {jsPDF} from "jspdf";


@Component({
  selector: 'app-demande-credit',
  templateUrl: './demande-credit.component.html',
  styleUrls: ['./demande-credit.component.css']
})
export class DemandeCreditComponent implements OnInit {
  faFilePdf =faFilePdf;

  @ViewChild ('middleTable', {static : false }) el!: ElementRef;


  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  creditInteretConstant: CreditInteretConstant;


  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  demoValue = 100;
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder, private creditService: CreditService) {
    this.creditInteretConstant = new CreditInteretConstant();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      emprunt: [null, [Validators.required]],
      valeurVehicule: [null, [Validators.required]],
      autofinancement: [null, [Validators.required]],
      dureeRemboursement: [null, [Validators.required]],
      tauxInteret: [null, [Validators.required]],


    });
  }

  simulerDemandeCredit() {
    this.creditService.tableauAmortissement(this.creditInteretConstant)
    .subscribe(data =>{
      this.creditInteretConstant = data;
    } )

  }

  envoyerDemandeCredit(){
    this.creditService.saveCreditInteretConstant(this.creditInteretConstant).subscribe(
      data =>{
        this.creditInteretConstant = data;
      }
    )
  }

makePDF(){
  let pdf = new jsPDF('l', 'pt', 'a4');
  pdf.html(this.el.nativeElement, {callback: (pdf) => {
    pdf.save("Tableau d'amortissement");




  } });

}



}

