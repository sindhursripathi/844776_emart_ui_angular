import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  allitems:Item[];
  item: Item;
  EmartService:any;
  
  constructor(protected emart:EmartService,
    protected router:Router) { }

  ngOnInit(): void {
    this.allitems=this.emart.getAllItems();

  }
displayItemDetails(itemId: number)
{
this.router.navigate(['/item-display/'+itemId])
}
}
