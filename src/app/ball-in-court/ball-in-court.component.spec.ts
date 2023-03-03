import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallInCourtComponent } from './ball-in-court.component';

describe('BallInCourtComponent', () => {
  let component: BallInCourtComponent;
  let fixture: ComponentFixture<BallInCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallInCourtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallInCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
