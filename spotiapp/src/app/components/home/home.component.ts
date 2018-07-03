import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasRealeses:any[]=[];
  loading:boolean;
  error:boolean=false;
  msgError;


  constructor(private spotify:SpotifyService) {
    this.loading=true;
    this.spotify.getNewRealeses().subscribe((data:any) => {
      console.log(data);
      this.nuevasRealeses=data;
    }, (err)=>{
      this.error=true;
      this.loading=false;
      this.msgError = err.error.error.message;
    });
  }

  ngOnInit() {
    this.loading=false;
  }

}
