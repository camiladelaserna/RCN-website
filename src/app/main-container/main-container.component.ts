import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LandingAnimations } from '../animations/animations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  animations: LandingAnimations.animations
})
export class MainContainerComponent implements OnInit {

  state = 'default';
  lineState = 'hide';
  mobile = false;
  menu = false;
  menuBlack = false;

  lineStateCreditors = 'hide';
  lineStateOriginators = 'hide';
  lineStateDevelopers = 'hide';
  lineStateHowItWorks = 'hide';


  constructor(public el: ElementRef, private router: Router) {
   }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > componentPosition) {
      this.lineState = 'show';
      this.state = 'scrollAndShrink';
    } else {
      this.lineState = 'hide';
      this.state = 'default';
    }

    if (scrollPosition > 50) {
      this.menuBlack = true;
    } else {
      this.menuBlack = false;
    }

  }

  markAsSelected(section: string) {
    const element = document.getElementById(section);
    element.classList.add('pulse');
    setTimeout(function() {
    element.classList.remove('pulse');
    }, 1000);
    this.lineStateCreditors = 'hide';
    this.lineStateOriginators = 'hide';
    this.lineStateDevelopers = 'hide';
    this.lineStateHowItWorks = 'hide';
    switch (section) {
      case 'creditors':
        this.lineStateCreditors = 'show';
        break;
      case 'originators':
        this.lineStateOriginators = 'show';
        break;
      case 'developers':
        this.lineStateDevelopers = 'show';
        break;
      case 'how-it-works':
        this.lineStateHowItWorks = 'show';
        break;
      default:
      break;

    }
  }

  mobileMenu() {
    this.mobile = !this.mobile;
    this.menu = !this.menu;
  }

  hideMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          this.markAsSelected(url.substring(1, url.length));
        }
      }
    );
  }

}
