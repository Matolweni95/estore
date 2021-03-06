import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  login() {
    this.router.navigateByUrl('/Login');
  };

  home(){
    this.router.navigateByUrl('/');
  }

  cart() {
    this.router.navigateByUrl('/ShoppingCart');
  }

  ngOnInit(): void {
  }

}
