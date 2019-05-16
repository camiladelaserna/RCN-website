import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheDappComponent } from './meet-the-dapp.component';

describe('MeetTheDappComponent', () => {
  let component: MeetTheDappComponent;
  let fixture: ComponentFixture<MeetTheDappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTheDappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheDappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
