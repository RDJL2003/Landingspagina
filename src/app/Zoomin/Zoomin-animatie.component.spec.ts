
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ZoominComponent } from './Zoomin-animatie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ZoominComponent', () => {
  let component: ZoominComponent;
  let fixture: ComponentFixture<ZoominComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoominComponent],
      imports: [BrowserAnimationsModule]
    });

    fixture = TestBed.createComponent(ZoominComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial animation state as "normal"', () => {
    const initialStates = Object.values(component.animationStates);
    expect(initialStates.every(state => state === 'normal')).toBeTruthy();
  });

  it('should update animation state on zoom method call', () => {
    const imageKey = 'mockup1';

    // Initial state should be 'normal'
    expect(component.animationStates[imageKey]).toBe('normal');

    // Call the zoom method with 'zoomed' state
    component.zoom(imageKey, 'zoomed');

    // Expect the state to be updated to 'zoomed'
    expect(component.animationStates[imageKey]).toBe('zoomed');
  });

  // Add more tests as needed for your specific use case
});



