import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercompComponent } from './othercomp.component';

describe('OthercompComponent', () => {
  let component: OthercompComponent;
  let fixture: ComponentFixture<OthercompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthercompComponent]
    });
    fixture = TestBed.createComponent(OthercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
