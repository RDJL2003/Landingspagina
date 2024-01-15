import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SlideshowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-app'`, () => {
    expect(component.title).toEqual('angular-app');
  });

});
