import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormErrorsComponent } from './shared/components/form-errors/form-errors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { ArtistcardComponent } from './pages/artist-detail/artistcard/artistcard.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ArtistsComponent,
    GalleryComponent,
    FormErrorsComponent,
    ArtistDetailComponent,
    ArtistcardComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
