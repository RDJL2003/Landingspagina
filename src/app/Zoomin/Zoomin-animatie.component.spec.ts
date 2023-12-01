import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoominComponent } from './Zoomin-animatie.component';

describe('ZoominComponent', () => {
  let component: ZoominComponent;
  let fixture: ComponentFixture<ZoominComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoominComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoominComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Voeg hier meer testen toe om de functionaliteit van de component te verifiëren
});