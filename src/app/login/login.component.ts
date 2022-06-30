import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/login.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

  ngOnInit(): void {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = 'assets/login.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
  
  }

}
