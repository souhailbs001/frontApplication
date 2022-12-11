import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rdv } from 'src/app/model/rdv';
import { RdvService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-accept-rdv',
  templateUrl: './modal-accept-rdv.component.html',
  styleUrls: ['./modal-accept-rdv.component.css']
})
export class ModalAcceptRdvComponent implements OnInit {
  rdv: Rdv
  constructor( private rdvService:RdvService,  
    private dialogRef: MatDialogRef<ModalAcceptRdvComponent>,
    @Inject(MAT_DIALOG_DATA) data){
      this.rdv = data;
    }
  ngOnInit(): void {
  }

  accept() {
    // this.dialogRef.close(this.form.value);
    this.rdvService.accepterRdv(this.rdv.id,this.rdv).subscribe((res)=>{
     Swal.fire({
       title: 'Voulez-vous vraiment accepter ce rendez-vous ?',
       showDenyButton: true,
       showCancelButton: true,
       confirmButtonText: 'Save',
       denyButtonText: `Don't save`,
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         Swal.fire('Saved!', '', 'success')
       } else if (result.isDenied) {
         Swal.fire('Changes are not saved', '', 'info')
       }
     })
    })
 }
 close() {
  this.dialogRef.close();
}

}
