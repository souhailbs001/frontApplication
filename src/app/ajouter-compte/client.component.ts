import { Component, OnInit } from '@angular/core';
import { CompteClientComponent } from '../compte-client/compte-client.component';
import { Client } from '../model/client';
import { Compte } from '../model/compte';
import { Currency } from '../model/currency';
import { currencies } from '../model/currency-data-store';
import { ClientService } from '../services/client.service';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  value?: String;
  //value?: String;
  isLoadingTwo = false;

  checked = true;

  client : Client;
  clients : Client[] = [];
  listClients : any = this.clients

  compte : Compte;
  comptes : Compte[] = [];
  listComptes : any = this.comptes;


  public currencies :any= currencies;
  
  selectedValue = null;


  constructor(private clientService: ClientService, private compteService:CompteService) {
    //this.client = new Client();
    this.compte = new Compte();
    
   }

  ngOnInit(): void {
    this.clientService.listClient().subscribe(data => {
      this.listClients = data;
      console.log(data)
  })
}


saveAccount(c) : void{

  console.log(c); 
  this.compteService.saveCompte(c.client).subscribe((data)=>{
    console.log(data);
    
  })

}

generateRib() {
  this.isLoadingTwo = true;
  setTimeout(() => {
    this.isLoadingTwo = false;
  }, 1000);
  
}


}
