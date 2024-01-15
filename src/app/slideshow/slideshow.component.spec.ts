
import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { SlideshowComponent } from './slideshow.component';
import { SlideshowService } from '../slideshow.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;
  let slideshowService: SlideshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      providers: [SlideshowService],
      imports: [BrowserAnimationsModule], // Import the BrowserAnimationsModule for animation testing
    });
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    slideshowService = TestBed.inject(SlideshowService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should start slideshow and change images', fakeAsync(() => {
    const getImagesSpy = spyOn(slideshowService, 'getImages').and.returnValue(['image1.jpg', 'image2.jpg']);
    fixture.detectChanges();
  
    expect(getImagesSpy).toHaveBeenCalled();
    expect(component.images.length).toBe(2);
  

    tick(2000);
    discardPeriodicTasks();
    
    expect(component.fadeInOutState).toBe('in');
    tick(500);
    expect(component.fadeInOutState).toBe('in');
    expect(component.currentImageIndex).toBe(0);

    component.showNextImage();
    tick(1000);

    expect(component.fadeInOutState).toBe('in');
    tick(500);
    expect(component.fadeInOutState).toBe('in');
    expect(component.currentImageIndex).toBe(1);
  }))
  

});


