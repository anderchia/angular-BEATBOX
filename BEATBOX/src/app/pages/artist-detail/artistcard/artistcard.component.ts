import { GetartistsService } from 'src/app/core/components/services/getartists.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.scss']
})
export class ArtistcardComponent implements OnInit {
@Input() artist:any;
  constructor(private location: Location,private route: ActivatedRoute, private GetartistsService: GetartistsService, private router: Router) { }

  ngOnInit(): void {
  }

  onGoBack(): void {
    this.location.back();
  }
  onUpdate (item : any){
    this.GetartistsService.updateInfo(item);
    this.router.navigate(["/about"])


  }
}
