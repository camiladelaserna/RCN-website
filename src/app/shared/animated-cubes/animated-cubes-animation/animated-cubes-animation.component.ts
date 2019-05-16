import { Component, OnInit, ElementRef, Input, SimpleChange, ViewChild, Output, EventEmitter } from '@angular/core';
import lottie from 'lottie-web';
import { getAnimation } from '../../../../assets/lottie-animations/cubes';

@Component({
  selector: 'app-animated-cubes-animation',
  templateUrl: './animated-cubes-animation.component.html',
  styleUrls: ['./animated-cubes-animation.component.scss']
})

export class AnimatedCubesAnimationComponent implements OnInit {
  
  @Input('key') key: string;
  @Input('current') current: boolean;
  @Output() finishedPlaying = new EventEmitter;
  @ViewChild('container') container: ElementRef;

  animation = null;

  ngOnInit() {
    const animation = getAnimation(this.key);
    if (!animation) return;
    this.animation = lottie.loadAnimation({
      container: this.container.nativeElement,
      autoplay: false,
      loop: false,
      renderer: 'svg',
      assetsPath: 'assets/lottie-animations/cubes/images/',
      animationData: animation.data,
    });
    this.animation.setSpeed(animation.speed);
    this.animation.addEventListener('complete', () => this.finishedPlaying.emit());
  }
  
  ngOnChanges({current}: {[propKey: string]: SimpleChange}) {
    if (!current || current.firstChange) return;
    if (current.currentValue) this.animation.play();
    if (current.previousValue) this.animation.stop();
  }

}
