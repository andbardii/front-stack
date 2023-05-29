import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcompComponent } from './firstcomp.component';

describe('FirstcompComponent', () => {
  let component: FirstcompComponent;
  let fixture: ComponentFixture<FirstcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstcompComponent]
    });
    fixture = TestBed.createComponent(FirstcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
