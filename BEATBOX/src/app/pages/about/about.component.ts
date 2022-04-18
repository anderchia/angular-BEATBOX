import { GetartistsService } from 'src/app/core/components/services/getartists.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

contactForm!:FormGroup
public submitted: boolean=false;

change: any;

createdArtist:any;

artistId = this.GetartistsService.data._id//put -> aqui sustituye el nuevo por el id

newArtist: any;

  constructor(private formBuilder: FormBuilder, private GetartistsService:GetartistsService, private location: Location) {
    this.contactForm = this.formBuilder.group(
      { name: [this.GetartistsService.data.name, [Validators.required]],
    year:[this.GetartistsService.data.year, [Validators.required]],
    genre:[this.GetartistsService.data.genre, [Validators.required]],
    albums:[this.GetartistsService.data.albums, [Validators.required]],
    image:[this.GetartistsService.data.image, [Validators.required]]
      })
    }

    onSubmit() {
      console.log (this.contactForm)
      console.log (this.contactForm.value)
      this.submitted = true;

      if (this.contactForm.valid){
       this.newArtist = {
          name: this.contactForm.get("name")?.value,
          year: this.contactForm.get("year")?.value,
          genre: this.contactForm.get("genre")?.value,
          image: this.contactForm.get("image")?.value,
          albums: this.contactForm.get("albums")?.value,
        }
        console.log("This is your new artist: ", this.newArtist);

        if (this.GetartistsService.data._id === undefined){
          this.GetartistsService.postArtist(this.newArtist).subscribe();
        }else{
          this.GetartistsService.putArtist(this.artistId, this.newArtist).subscribe();
        }

      // this.GetartistsService.putArtist(this.newArtist, this.artistId).subscribe() //put
      //this.GetartistsService.postArtist(newArtist).subscribe(); //post


        this.contactForm.reset()  //para borrar formulario tras enviar
        this.submitted = false;
      }
    }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe((changes)=>{
      this.createdArtist = changes;
      console.log(this.createdArtist)


    })
  }

  onGoBack(): void {
    this.location.back();
    }
}
