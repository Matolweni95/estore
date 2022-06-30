import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryComponent } from '../delivery/delivery.component';
import { ExchangeComponent } from '../refund/exchange/exchange.component'; 
@Component({
  selector: 'app-shoeview',
  templateUrl: './shoeview.component.html',
  styleUrls: ['./shoeview.component.css']
})
export class ShoeviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDeliver() {
    this.dialog.open(DeliveryComponent);
    
  }

  openExchange() {
    this.dialog.open(ExchangeComponent);
  }

}
