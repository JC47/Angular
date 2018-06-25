import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any;

  constructor(private _activated:ActivatedRoute,
              private _heroe:HeroesService) {
    this._activated.params.subscribe( params => {
        this.heroe = this._heroe.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
