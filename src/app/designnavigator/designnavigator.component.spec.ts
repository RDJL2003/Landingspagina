import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignnavigatorComponent } from './designnavigator.component';

describe('DesignnavigatorComponent', () => {
  let component: DesignnavigatorComponent;
  let fixture: ComponentFixture<DesignnavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignnavigatorComponent]
    });
    fixture = TestBed.createComponent(DesignnavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
