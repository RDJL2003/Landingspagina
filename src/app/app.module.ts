import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';import { DesignnavigatorComponent } from './designnavigator/designnavigator.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    DesignnavigatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
