import { Component, OnInit, ElementRef, Input, SimpleChange, HostListener } from '@angular/core';
import { getAnimationKeys } from '../../../assets/lottie-animations/cubes';

@Component({
  selector: 'app-animated-cubes',
  templateUrl: './animated-cubes.component.html'
})

export class AnimatedCubesComponent implements OnInit {

  @Input() currentTab: number | null;
  @Input() shown: boolean;

  tabAnimatingTo = null;
  animationKeys = getAnimationKeys();
  currentAnimation = null;
  initialized = false;

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
  }

  ngOnChanges({currentTab, shown}: {[propKey: string]: SimpleChange}) {
    if (!this.initialized && shown.currentValue === true) {
      this.playAnimation('-10');
      this.initialized = true;
    }
    if (!currentTab || currentTab.firstChange || this.tabAnimatingTo !== null) return;

    const { previousValue, currentValue } = currentTab;
    this.playAnimation(`${previousValue}${currentValue}`);
  }
  
  animationFinished() {
    if (this.currentTab === this.tabAnimatingTo) {
      this.tabAnimatingTo = null;
      return;
    }
    this.playAnimation(`${this.tabAnimatingTo}${this.currentTab}`);
  }
  
  playAnimation(key: string) {
    this.currentAnimation = key;
    this.tabAnimatingTo = this.currentTab;
  }

}
