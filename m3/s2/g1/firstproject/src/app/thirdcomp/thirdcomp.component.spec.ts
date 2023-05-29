import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcompComponent } from './thirdcomp.component';

describe('ThirdcompComponent', () => {
  let component: ThirdcompComponent;
  let fixture: ComponentFixture<ThirdcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdcompComponent]
    });
    fixture = TestBed.createComponent(ThirdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
