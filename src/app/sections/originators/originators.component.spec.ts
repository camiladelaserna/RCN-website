import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorsComponent } from './originators.component';

describe('OriginatorsComponent', () => {
  let component: OriginatorsComponent;
  let fixture: ComponentFixture<OriginatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
