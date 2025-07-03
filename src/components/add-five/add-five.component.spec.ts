import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFiveComponent } from './add-five.component';

describe('AddFiveComponent', () => {
  let component: AddFiveComponent;
  let fixture: ComponentFixture<AddFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
