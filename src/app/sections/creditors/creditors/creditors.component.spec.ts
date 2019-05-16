import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorsComponent } from './creditors.component';

describe('CreditorsComponent', () => {
  let component: CreditorsComponent;
  let fixture: ComponentFixture<CreditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
