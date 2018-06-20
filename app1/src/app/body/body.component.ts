import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {

  frase: any = {
    mensaje:"Un gran poder lleva un gran responsabilidad",
    autor:"Perro"
  }
  bandera:boolean = true;

  personajes:string[] = ['Francisco','Penny','Maximo'];

  constructor() { }

  ngOnInit() {
  }

  valida(){
    if(this.bandera){
      this.bandera=false;
    }
    else{
      this.bandera=true;
    }
  }

}
