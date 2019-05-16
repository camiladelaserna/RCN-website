import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSectionComponent } from './heading-section.component';

describe('HeadingSectionComponent', () => {
  let component: HeadingSectionComponent;
  let fixture: ComponentFixture<HeadingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
