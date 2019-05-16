import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginHeaderComponent } from './origin-header.component';

describe('OriginHeaderComponent', () => {
  let component: OriginHeaderComponent;
  let fixture: ComponentFixture<OriginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
