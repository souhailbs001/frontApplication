import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte';
import { CompteService } from '../services/compte.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  //compte: Compte;
  loading = false
  dataDisplay: any;
  //listComptes: Compte[] = [];
  listComptes: any
  count: number = 0;
  currentIndex = -1;
  title = '';
  page = 1;
  dt: any;
  searchValueRib: any;


  pageSize = 3;
  pageSizes = [3, 6, 9, 12, 15];
  constructor(private route: ActivatedRoute, private compteService: CompteService) {
    //this.compte = new Compte();
    this.loading = false;

  }

  ngOnInit(): void {
    this.getListComptes();

  };


  numberWithSpaces(x: number) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  handlePageChange(event: any): void {
    this.page = event;
    this.getListComptes();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getListComptes();
  }
  //Initialize compte list 
  Initialiser(){
    this.getListComptes()
  }
  getListComptes() {
    this.compteService.listCompte().subscribe(Response => {
      // If Response comes function
      // hideloader() is called
      if (Response) {
        this.listComptes = Response;
        this.count = this.listComptes.length
        if (this.count < 0) {
          this.loading = false;
        } else {
          this.loading = true
        }
      }
      console.log(Response)
      this.dt = Response;
      this.dataDisplay = this.dt.data;


    });

  }

  onSearchCompte() {

    if (this.searchValueRib === null || this.searchValueRib === undefined || this.searchValueRib === "") {
      this.getListComptes()
    }
    else {
      console.log("In")
      this.compteService.onSearchCompte(this.searchValueRib).subscribe((data) => {
        if (data) {
          this.listComptes = data
          this.count = this.listComptes.length
        }

      })
    }

  }
}
