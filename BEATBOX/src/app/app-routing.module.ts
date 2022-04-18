import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch:"full", component:HomeComponent},
  {path: "artists", component:ArtistsComponent},
  {path: "artists/:artistID", component: ArtistDetailComponent},
  {path: "about", component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
