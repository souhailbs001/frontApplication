import { Component, OnInit, Inject } from '@angular/core';
import { Rdv } from 'src/app/model/rdv';
import { RdvService } from 'src/app/services/rdv.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-edit-rdv',
  templateUrl: './modal-edit-rdv.component.html',
  styleUrls: ['./modal-edit-rdv.component.css']
})
export class ModalEditRdvComponent implements OnInit {
  rdv :Rdv;
  constructor(
    private rdvService:RdvService,
    private dialogRef: MatDialogRef<ModalEditRdvComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.rdv =data;
}
  ngOnInit(): void {
  }

  save() {
    // this.dialogRef.close(this.form.value);
    this.rdvService.refuserRdv(this.rdv.id,this.rdv).subscribe((res)=>{
     Swal.fire({
       title: 'Voulez-vous vraiment refuser ce rendez-vous ?',
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
