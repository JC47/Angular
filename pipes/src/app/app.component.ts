import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre="Javier";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI= Math.PI;
  a=0.234;
  salario=1234.5;
  heroe={
    nombre:'Wolverine',
    clave:'Loga',
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }
  valorDePromesa = new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Llego la data');
    })
  });

  fecha=new Date();

  nombre2 = "javier isAel caleTTe cornelio"

  video="Ve-rxwKuqtI";


}
