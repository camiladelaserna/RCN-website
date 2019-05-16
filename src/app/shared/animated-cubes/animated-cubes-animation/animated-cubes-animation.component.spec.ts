import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCubesAnimationComponent } from './animated-cubes-animation.component';

describe('AnimatedCubesAnimationComponent', () => {
  let component: AnimatedCubesAnimationComponent;
  let fixture: ComponentFixture<AnimatedCubesAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedCubesAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedCubesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
