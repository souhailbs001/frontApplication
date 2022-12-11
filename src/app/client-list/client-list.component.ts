import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Currency } from '../model/currency';
import { ClientService } from '../services/client.service';
declare var $: any;




@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  dynamicdata: any;
  listClients: Client[] = [];

  // nz data Tbale 
  visible = false;
  




  constructor(private clientService: ClientService , http : HttpClient) {
    
  }

    ngOnInit() : void {
      this.clientService.listClient().subscribe((data) => {
        this.listClients = data;
         setTimeout(()=>{   
          $('#dataTables-example').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25]
          });
  
      } 
      )
    });
      
  
  
    }


 

}

