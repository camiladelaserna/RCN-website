import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredHeaderComponent } from './cred-header.component';

describe('CredHeaderComponent', () => {
  let component: CredHeaderComponent;
  let fixture: ComponentFixture<CredHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
