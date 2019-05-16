import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicCardComponent } from './characteristic-card.component';

describe('CharacteristicCardComponent', () => {
  let component: CharacteristicCardComponent;
  let fixture: ComponentFixture<CharacteristicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
