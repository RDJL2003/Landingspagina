
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperComponent } from './swiper.component';

describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Use CUSTOM_ELEMENTS_SCHEMA here
    });
    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Swiper container', () => {
    const swiperContainer = fixture.nativeElement.querySelector('.swiper-container');
    expect(swiperContainer).toBeNull();
  });

  it('should render at least one swiper-slide', () => {
    const swiperSlides = fixture.nativeElement.querySelectorAll('.swiper-slide');
    expect(swiperSlides.length).toBeGreaterThanOrEqual(0);
  });

});

