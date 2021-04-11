import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkersComponent } from './blinkers.component';

describe('BlinkersComponent', () => {
  let component: BlinkersComponent;
  let fixture: ComponentFixture<BlinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
