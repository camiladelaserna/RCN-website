import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredCharacteristicsComponent } from './cred-characteristics.component';

describe('CredCharacteristicsComponent', () => {
  let component: CredCharacteristicsComponent;
  let fixture: ComponentFixture<CredCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
