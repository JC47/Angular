import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }

  buscar(l:string){
    this.r.navigate(['/lista',l]);
  }

}
