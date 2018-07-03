import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista:any = {};
  loading:boolean;
  topTracks:any[] = [];

  constructor(private r:ActivatedRoute,
              private spotify:SpotifyService) {
    this.loading = true;
    this.r.params.subscribe(data =>{
      this.getArtista(data['id']);
      this.getTopTracks(data['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id:String){
    this.loading = true;
    this.spotify.returnArtista(id).subscribe(data => {
      this.artista=data;
      this.loading=false;
    });
  }

  getTopTracks(id:String){
    this.spotify.getTopTracks(id).subscribe(data => {
      console.log(data)
      this.topTracks=data;
    });
  }

}
