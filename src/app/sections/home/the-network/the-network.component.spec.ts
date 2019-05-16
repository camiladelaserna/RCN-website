import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNetworkComponent } from './the-network.component';
import { AnimatedCubesComponent } from '../../../shared/animated-cubes/animated-cubes.component';

describe('TheNetworkComponent', () => {
  let component: TheNetworkComponent;
  let fixture: ComponentFixture<TheNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheNetworkComponent, AnimatedCubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
