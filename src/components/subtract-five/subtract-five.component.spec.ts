import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractFiveComponent } from './subtract-five.component';

describe('SubtractFiveComponent', () => {
  let component: SubtractFiveComponent;
  let fixture: ComponentFixture<SubtractFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtractFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
