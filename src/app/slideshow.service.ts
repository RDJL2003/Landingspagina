import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  private images: string[] = [
    'overlamper.jpg',
    'slideshow 1.jpg',
    'slideshow 2.webp'
  ];

  getImages(): string[]{
    return this.images
  }
}
