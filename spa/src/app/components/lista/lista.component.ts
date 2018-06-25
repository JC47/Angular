import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  heroes:any=[];

  constructor(private _activated:ActivatedRoute,
              private _heroe:HeroesService) {
  }

  ngOnInit() {
    this._activated.params.subscribe( params => {
        this.heroes = this._heroe.buscarHeroe(params['texto']);
        console.log(this.heroes);
    });
  }

}
