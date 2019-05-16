import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingComponent } from './getting.component';

describe('GettingComponent', () => {
  let component: GettingComponent;
  let fixture: ComponentFixture<GettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
