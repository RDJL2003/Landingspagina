import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component'; 
import { ZoominComponent } from './Zoomin/Zoomin-animatie.component';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperComponent } from './swiper/swiper.component';
// register Swiper custom elements
register(); 


@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    ZoominComponent,
    SwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
