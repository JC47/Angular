import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:String){
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAIeUH_cjJZ4smfY-7ZV6ewTndlpSqvyncctfe0hZI8NjTcDFX9BqRsNTSh9NCpCi74bX1F_YySZ6Nm0Q8'
    });

    return this.http.get(URL,{headers});
  }

  getNewRealeses(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items ));
  }

  getArtista(t:String){
    return this.getQuery('search?q='+t+'&type=artist&limit=15').pipe(map(data => data['artists'].items));
  }

  returnArtista(t:String){
    return this.getQuery('artists/'+t);
  }

  getTopTracks(t:String){
    return this.getQuery('artists/'+t+'/top-tracks?country=us').pipe(map(data => data['tracks']));
  }
}
