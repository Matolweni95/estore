import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isShown = false;

  shipping = this._formBuilder.group({
    address: false, 
  });
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.isShown = !this.isShown;
  }

}
