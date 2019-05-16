import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHeaderComponent } from './how-header.component';

describe('HowHeaderComponent', () => {
  let component: HowHeaderComponent;
  let fixture: ComponentFixture<HowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
