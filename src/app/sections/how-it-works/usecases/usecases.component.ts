import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss'],
  animations: LandingAnimations.animations
})
export class UsecasesComponent implements OnInit {

  state = 'show';
  lineState = 'show';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.lineState = 'show';
        this.state = 'show';
      } else {
      }

    }


  ngOnInit() {
    this.state = 'show';
    this.lineState = 'show';
  }

}
