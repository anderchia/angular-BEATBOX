import { GetartistsService } from './../../core/components/services/getartists.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']

})
export class ArtistsComponent implements OnInit {

  public artists: any;

  constructor(private GetartistsService: GetartistsService) { }

  ngOnInit(): void {
    this.GetartistsService.getArtists().subscribe((res:any) =>{
      console.log(res);
      this.artists = res;
    })


  }

}
