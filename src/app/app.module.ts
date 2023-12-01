import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component'; 
import { ZoominComponent } from './Zoomin/Zoomin-animatie.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    ZoominComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
