import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  animations: LandingAnimations.animations
})
export class TypesComponent implements OnInit {
  state = 'hide';
  lineState = 'hide';
  currentTab = 0;

  constructor(public el: ElementRef, private router: Router) { }

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

    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
      this.currentTab = tabChangeEvent.index;
    }
  
}
