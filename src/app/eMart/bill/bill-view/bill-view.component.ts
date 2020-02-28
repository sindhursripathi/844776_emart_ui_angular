import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {

  cartItems:Item[];
buyerName:string ='John';
buyerId:string='101';
buyerDate:string='20/11/2019';
buyerContact:string='sindhu@gmail.com';
amount:number=0;
billItems;
  constructor(protected emartService:EmartService) { }

  ngOnInit(): void {
    this.cartItems=this.emartService.getAllCart();
    let size=this.cartItems.length;
   for(let i=0;i<size;i++)
   {
      this.amount=this.amount+this.cartItems[i].price;
   }
   this.billItems=this.emartService.addBill(this.buyerId,this.buyerDate,this.amount);
   
     }
}