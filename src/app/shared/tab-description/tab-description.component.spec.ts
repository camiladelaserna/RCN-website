import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDescriptionComponent } from './tab-description.component';

describe('TabDescriptionComponent', () => {
  let component: TabDescriptionComponent;
  let fixture: ComponentFixture<TabDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
