import { Component, OnInit } from '@angular/core';
import { Currency } from '../model/currency';
import { currencies } from '../model/currency-data-store';


interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-devise-list',
  templateUrl: './devise-list.component.html',
  styleUrls: ['./devise-list.component.css']
})
export class DeviseListComponent implements OnInit {
  public currencies: any = currencies;
  listCurrencies : Currency[] = [];

  searchValue = '';
  visible = false;
  
  listOfDisplayData = [...this.listCurrencies];

  

  constructor() {
   }

  ngOnInit(): void {
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.currencies.filter((item: Currency) => item.cc.indexOf(this.searchValue) !== -1);
  }

}
