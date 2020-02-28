import { Component, OnInit } from '@angular/core';

import { EmartService } from '../../emart.service';

import { Item } from '../../item';

import { Bill } from '../../bill';
import { Router } from '@angular/router';



@Component({

  selector: 'app-bill-list',

  templateUrl: './bill-list.component.html',

  styleUrls: ['./bill-list.component.css']

})

export class BillListComponent implements OnInit {
  bills: Bill[];
  
  cartItems: Item[];
  buyerName: string = 'John';
  buyerId: string = '101';
  buyerDate: string = '20/11/2019';
  buyerContact: string = 'sindhu@gmail.com';
  amount: number = 0;
  
  allBills: Bill[];

  constructor(protected emartService: EmartService) { }

  ngOnInit(): void {

    this.bills = this.emartService.getAllBills();
    console.log( this.bills[1].items.length);
  }
  
}
