import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCubesComponent } from './animated-cubes.component';
import { AnimatedCubesAnimationComponent } from './animated-cubes-animation/animated-cubes-animation.component';

describe('AnimatedCubesComponent', () => {
  let component: AnimatedCubesComponent;
  let fixture: ComponentFixture<AnimatedCubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedCubesComponent, AnimatedCubesAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
