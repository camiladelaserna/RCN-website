import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';


@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss'],
  animations: LandingAnimations.animations
})
export class InterestedComponent implements OnInit {
  state = 'hide';
  lineState = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition + 750 >= componentPosition) {
        this.lineState = 'show';
        this.state = 'show';
      } else {
      }

    }

    ngOnInit() {
    }

}
