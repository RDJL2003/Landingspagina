// slideshow.component.ts

import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../slideshow.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity:  0
      })),
      transition('in <=> out', animate('1.5s ease-out'))
    ]),
  ],
})
export class SlideshowComponent implements OnInit {
  images: string[] = [
    'overlamper.jpg',
    'slideshow 1.jpg',
    'slideshow 2.webp'
  ];
  currentImageIndex: number = 0;
  fadeInOutState: string = 'in';

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit() {
    this.images = this.slideshowService.getImages();
    this.startSlideshow();
  }

  startSlideshow(): void {
    console.log('Slideshow started');
    setInterval(() => {
      this.showNextImage();
    }, 10000); 
  }

  showNextImage(): void {
    console.log('showNextImage called');
    this.fadeInOutState = 'out';
    setTimeout(() => {
      this.fadeInOutState = 'in';
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 500);
  }


  showPreviousImage(): void {
    this.fadeInOutState = 'out';
    setTimeout(() => {
      this.fadeInOutState = 'in';
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }, 500);
  }

}

