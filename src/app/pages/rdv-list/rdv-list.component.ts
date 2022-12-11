import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import {faBan} from '@fortawesome/free-solid-svg-icons'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rdv } from '../../model/rdv';
import { ActivatedRoute, Router } from '@angular/router';
import { statut } from '../../model/statut';
import { id } from 'date-fns/locale';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { faPaperclip} from '@fortawesome/free-solid-svg-icons'
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { FileService } from 'src/app/services/file.service';


@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {
  currentTRdv = null;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9,12,15];
  listRdv : any;
  faCalendarCheck =faCalendarCheck;
  faBan = faBan;
  rdvs : Rdv[] = [];
  dt: any;
  loading=false
  dataDisplay: any;
  
  size: NzButtonSize = 'large';
  faPaperclip = faPaperclip;

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  

  constructor(private dialog: MatDialog,private modalService: NgbModal, private rdvService : RdvService,
     private router : ActivatedRoute, private route : ActivatedRoute, private fileService: FileService) {
    this.loading=false
   }

  ngOnInit(): void {
    this.getListRdv();

    
  }
  getListRdv(){
    this.rdvService.listRdv().subscribe(Response =>{
      // If Response comes function
                // hideloader() is called
                if (Response) {
                  this.listRdv= Response;
                  this.count=this.listRdv.length  
                  if(this.count < 0){
                    this.loading=false;
                  }else{
                    this.loading =true
                  }
              }
              console.log(Response)
              this.dt = Response;
              this.dataDisplay = this.dt.data;
      
    });
  }
  
  handlePageChange(event :any): void {
    this.page = event;
    this.getListRdv();
  }
  handlePageSizeChange(event : any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getListRdv();
  }
  getRequestParams(searchTitle :any, page : any, pageSize : any): any {
    // tslint:disable-next-line:prefer-const
    let params :any = {};
    if (searchTitle) {
      params[`title`]  = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  save(rdv:Rdv) {
    // this.dialogRef.close(this.form.value);
    this.rdvService.refuserRdv(rdv.id,rdv).subscribe((res)=>{
     Swal.fire({
       
       title: 'Vous voulez vraiment refuser ce rendez vous ?',
       showDenyButton: true,
       showCancelButton: false,
       confirmButtonText: 'Confirmer',
       denyButtonText: `Annuler`,
       timer: 2000
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

 accept(rdv:Rdv) {
  // this.dialogRef.close(this.form.value);
  this.rdvService.accepterRdv(rdv.id,rdv).subscribe((res)=>{
   Swal.fire({
     title: 'Vous voulez vraiment accepter ce rendez vous ?',
     showDenyButton: true,
     showCancelButton: false,
     confirmButtonText: 'Confirmer',
     denyButtonText: `Annuler`,
   }).then((result : any) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
       Swal.fire('Rendez-vous accepté', '', 'success')
       location.reload()
     } else if (result.isDenied) {
       Swal.fire('aucun changement n\'est éffectué', '','info')
     }
   })
  })
}

redirectToDownloadPage():void{


}

// download file

onDownloadFile(filename: string): void {
  this.fileService.download(filename).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
}

private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
  switch(httpEvent.type) {
    case HttpEventType.UploadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
      break;
    case HttpEventType.DownloadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
      break;
    case HttpEventType.ResponseHeader:
      console.log('Header returned', httpEvent);
      break;
    case HttpEventType.Response:
      if (httpEvent.body instanceof Array) {
        this.fileStatus.status = 'done';
        for (const filename of httpEvent.body) {
          this.filenames.unshift(filename);
        }
      } else {
        saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
        // saveAs(new Blob([httpEvent.body!], 
        //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
        //    httpEvent.headers.get('File-Name'));
      }
      this.fileStatus.status = 'done';
      break;
      default:
        console.log(httpEvent);
        break;
    
  }
}

private updateStatus(loaded: number, total: number, requestType: string): void {
  this.fileStatus.status = 'progress';
  this.fileStatus.requestType = requestType;
  this.fileStatus.percent = Math.round(100 * loaded / total);
}



}
function saveAs(arg0: File) {
  throw new Error('Function not implemented.');
}

