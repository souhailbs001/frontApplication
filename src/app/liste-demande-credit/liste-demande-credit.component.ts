import { Component, OnInit } from '@angular/core';
import { CreditService } from '../services/credit.service';
import { CreditInteretConstant } from '../model/creditInteretConstant';
import { faPaperclip} from '@fortawesome/free-solid-svg-icons'
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import {faBan} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';






@Component({
  selector: 'app-liste-demande-credit',
  templateUrl: './liste-demande-credit.component.html',
  styleUrls: ['./liste-demande-credit.component.css']
})
export class ListeDemandeCreditComponent implements OnInit {
  credits : any;
  loading=false;
  count = 0;
  listDemandeCredits: CreditInteretConstant[] = [];
  chekList:Boolean=false;
  faPaperclip = faPaperclip;
  faCalendarCheck =faCalendarCheck;
  faBan = faBan;


  constructor(private creditService : CreditService) { 
    this.loading=false;
  }

  ngOnInit(): void {
    this.getListCredit();
  }


  getListCredit(){
    this.creditService.getAllCredit().subscribe(Response =>{
                if (Response) {
                  this.listDemandeCredits= Response;
                  this.count=this.listDemandeCredits.length  
                  if(this.count == 0){
                   
                    this.loading=true;
                  }else{
                    this.loading =false
                  }
              }
              console.log(Response)
              //this.dt = Response;
              //this.dataDisplay = this.dt.data;
      
    });

}


accept(credit : CreditInteretConstant) {
  // this.dialogRef.close(this.form.value);
  this.creditService.accepterCredit(credit.id).subscribe((res)=>{
   Swal.fire({
     title: 'Vous voulez vraiment valider ce crédit ?',
     showDenyButton: true,
     showCancelButton: false,
     confirmButtonText: 'Confirmer',
     denyButtonText: `Annuler`,
     //timer: 3000
   }).then((result : any) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
       Swal.fire('Crédit validé avec scucces!', '', 'success')
       location.reload()
     } else if (result.isDenied) {
       Swal.fire('aucun changement n\'est éffectué', '','info')
     }
   })
  })
}


refuse(credit:CreditInteretConstant) {
  // this.dialogRef.close(this.form.value);
  this.creditService.refuserCredit(credit.id).subscribe((res)=>{
   Swal.fire({
     
     title: 'Vous voulez vraiment refuser ce crédit?',
     showDenyButton: true,
     showCancelButton: false,
     confirmButtonText: 'Confirmer',
     denyButtonText: `Annuler`,
   }).then((result :any) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
       Swal.fire('Saved!', '', 'success')
       location.reload()
     } else if (result.isDenied) {
       Swal.fire('aucun changement n\'est éffectué', '', 'info')
     }
   })
  })
}


numberWithSpaces(x : number) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
}
