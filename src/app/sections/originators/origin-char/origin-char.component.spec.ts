import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginCharComponent } from './origin-char.component';

describe('OriginCharComponent', () => {
  let component: OriginCharComponent;
  let fixture: ComponentFixture<OriginCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
