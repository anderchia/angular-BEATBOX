import { GetartistsService } from './../../core/components/services/getartists.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
public artist: any;

getArtistsToFind: any;

  constructor(private route: ActivatedRoute, private GetartistsService: GetartistsService, private router: Router, private location: Location) {
  }


  ngOnInit(): void {

    this.route.params.subscribe((params:any) => {
      const id = params['artistID'];
      this.artist = this.GetartistsService.getArtistsById(id).subscribe(

      (res:any) => {
        this.getArtistsToFind = res;

        this.artist = this.getArtistsToFind

        })

      })
    }

  onGoBack(): void {
    this.location.back();
    }

  onUpdate (item : any){
    this.GetartistsService.updateInfo(item);
    this.router.navigate(["/about"])
      }

  onDelete() {
    this.route.params.subscribe((params:any) => {
      const id = params['artistID'];
      this.artist = this.GetartistsService.findByIdAndDelete(id).subscribe(
        (res:any) => {
          this.getArtistsToFind = res;
          this.artist = this.getArtistsToFind
          })
        })
      }

}



