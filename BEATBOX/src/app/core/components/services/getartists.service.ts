import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetartistsService {

  constructor(private http:HttpClient) { }

  data : any = {
    name:'',
    year:'',
    genre:'',
    albums:'',
    image:''
  };

  getArtists(){
    return this.http.get('http://localhost:5000/artist')
  }

  getArtistsById(id:any){
    return this.http.get(`http://localhost:5000/artist/${id}`)

  }

  postArtist(createdArtist:any){
    return this.http.post('http://localhost:5000/artist/newArtist', createdArtist)
  }


  updateInfo (item:any ){
    this.data= item;
    console.log(this.data)
  }

  putArtist(artistId: any, editedArtist: any){
    return this.http.put(`http://localhost:5000/artist/` + artistId, editedArtist)
  }

  findByIdAndDelete(id:any){
    return this.http.delete(`http://localhost:5000/artist/${id}`)
  }
}
