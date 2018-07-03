import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verArtista(item:any){
    let id;
    if(item.type === 'artist'){
      id = item.id;
    }
    else{
      id = item.artists[0].id;
    }
    this.router.navigate(['/artist',id]);
  }

}
