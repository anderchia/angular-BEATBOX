import { Component, Input, OnInit } from '@angular/core';
import { GetartistsService } from 'src/app/core/components/services/getartists.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input() artists: any =[];
filterpost = "";
public artist:any;

  constructor() { }

  ngOnInit(): void {

  }

}
