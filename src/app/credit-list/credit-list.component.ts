import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from '../model/credit';
import { CreditInteretConstant } from '../model/creditInteretConstant';
import { CreditService } from '../services/credit.service';


@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  creditIneretConstant : CreditInteretConstant;
  listCredit : CreditInteretConstant[];
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9,12,15];
  dt: any;
  loading=false
    
  dataDisplay: any;



  searchValueRib: any;


  constructor(private router : ActivatedRoute, private route : ActivatedRoute, private CreditService: CreditService) { 
    this.creditIneretConstant = new CreditInteretConstant();
    this.loading=false;
  }

  ngOnInit(): void {
    this.getListCredit();

  }

  getListCredit(){
    this.CreditService.getAllCredit().subscribe((data) =>{
      // If Response comes function
                // hideloader() is called
                console.log(data)
                if (data) {
                  this.listCredit= data;
                  this.count=this.listCredit.length  
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

  handlePageChange(event): void {
    this.page = event;
    this.getListCredit();
  }
  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getListCredit();
  }
  getRequestParams(searchTitle, page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
    numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
 }


 onSearchCompte() {

  if (this.searchValueRib === null || this.searchValueRib === undefined || this.searchValueRib === "") {
    this.getListCredit()
  }
  else {
    console.log("In")
    this.CreditService.onSearchCompte(this.searchValueRib).subscribe((data) => {
      if (data) {
        this.listCredit = data
        this.count = this.listCredit.length
      }

    })
  }

}

Initialiser(){
  this.getListCredit()
}

}
