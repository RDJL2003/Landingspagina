// slideshow.component.ts

import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../slideshow.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images: string[] = [
    'overlamper.jpg',
    'slideshow 1.jpg',
    'slideshow 2.webp'
  ];
  currentImageIndex: number = 0;

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit() {
    this.images = this.slideshowService.getImages();
    this.startSlideshow();
  }

  startSlideshow(): void {
    console.log('Slideshow started');
    setInterval(() => {
      this.showNextImage();
    }, 3000); // Verander dit naar de gewenste interval in milliseconden (bijv. 3000 voor 3 seconden)
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPreviousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}

