import { Component, OnInit } from '@angular/core';

interface DataItem {
  identifiant: any;
  libelleCourt: any;
  banque: any;
}

@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrls: ['./agence-list.component.css']
})
export class AgenceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfColumn = [
    {
      title: 'Name',
      compare: null,
      priority: false
    },
    {
      title: 'Libelle court',
      compare: (a: DataItem, b: DataItem) => a.libelleCourt - b.libelleCourt,
      priority: 3
    },
    {
      title: 'Banque',
      compare: (a: DataItem, b: DataItem) => a.banque - b.banque,
      priority: 2
    },
    
  ];
  
    
}
