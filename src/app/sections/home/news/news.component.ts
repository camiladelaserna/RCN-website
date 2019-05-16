import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';
import { start } from 'repl';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: LandingAnimations.animations
})
export class NewsComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  mobileContent: IContent[] = [];
  content: IContent[] = [];
  activeContent: IContent[] = [];
  activeContentStartIndex: number;
  maxActiveContent = 7;
  first = true;
  last = false;
  screen = 0;

  state = 'hide';
  lineState = 'hide';

  private isMobileResolution: boolean;
  private isDesktopResolution: boolean;
  private isResolution1: boolean;
  private isResolution2: boolean;

  constructor(public el: ElementRef) { }


  @HostListener('window:resize', ['$event'])
  checkWidth() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      this.activateContent(this.activeContentStartIndex, 'enterLeft')
    } else {
      this.isMobileResolution = false;
    }

    if (window.innerWidth > 768 && window.innerWidth < 1180) {
      this.isResolution1 = true;
      this.activateContent(this.activeContentStartIndex, 'enterLeft')
    } else {
      this.isResolution1 = false;
    }

    if (window.innerWidth > 1180 && window.innerWidth < 1560) {
      this.isResolution2 = true;
      this.activateContent(this.activeContentStartIndex, 'enterLeft')
    } else {
      this.isResolution2 = false;
    }

    if (window.innerWidth > 1560) {
      this.isDesktopResolution = true;
      this.activateContent(this.activeContentStartIndex, 'enterLeft')
    } else {
      this.isDesktopResolution = false;
    }
  }

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

    this.checkWidth();
    console.log(this.isMobileResolution);

    this.content = [
      {
        title: '',
        text: '',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: '',
        opacity: '',
        link: ''
      },
      {
        title: 'EDCON 2019',
        text: 'EDCON is a global conference series aiming to accelerate the development of the Ethereum ecosystem worldwide.',
        icon1: 'fas fa-calendar-alt',
        icon2: 'fas fa-map-marker-alt',
        date: '04/08-14/2019',
        location: 'Sydney - Australia',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://www.edcon.io/'
      },
    
      {
        title: 'Coindesk',
        text: 'Ripio Rolls Out Crypto-Powered Loans Across Latin America.',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://www.coindesk.com/ripio-rolls-out-crypto-powered-loans-across-latin-america'
      },
      
      {
        title: 'Forbes',
        text: 'A Journey From Poverty To Banking The Unbanked in Argentina.',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://www.forbes.com/sites/geraldfenech/2018/12/24/interview-a-journey-from-poverty-to-banking-the-unbanked-in-argentina'
      },
      {
        title: 'Cointelegraph',
        text: 'Global Lending System Can Be Improved With Blockchain.',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://cointelegraph.com/news/global-lending-system-can-be-improved-with-blockchain'
      },
      {
        title: 'Venturebeat',
        text: 'RCN launches Ripio Engine To Bring Blockchain And Smart-Contracts To Loans.',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://venturebeat.com/2018/05/03/rcn-launches-ripio-engine-to-bring-blockchain-and-smart-contracts-to-loans/'
      },
      {
        title: 'Nasdaq',
        text: 'Trade Talks - Blockchain Is Transforming Global Credit And Lending.',
        icon1: '',
        icon2: '',
        date: '',
        location: '',
        movement: 'noMovement',
        opacity: 'notOpacity',
        link: 'https://www.youtube.com/watch?v=H4Dwyv1ySjk'
      },
    ];

    this.activeContentStartIndex = 0;
    this.activateContent(this.activeContentStartIndex, '');

  }

  activateContent(startIndex: number, movement: string) {

    if (this.isMobileResolution === true) {
      console.log('Is mobile resolution');
      this.maxActiveContent = 1;
    }

    if (this.isDesktopResolution === true) {
      this.maxActiveContent = 7;
    }

    if (this.isResolution1 === true) {
      this.maxActiveContent = 5;
    }

    if (this.isResolution2 === true) {
      this.maxActiveContent = 6;
    }

    let activeContent: IContent[] = [];

    activeContent = JSON.parse(JSON.stringify(this.content));

    if (!this.isMobileResolution) {
      if (startIndex === 0 && movement !== 'left' && movement !== 'right') {
        this.activeContent = activeContent.slice(startIndex, startIndex + this.maxActiveContent);
        const contentLength = this.activeContent.length;
        this.activeContent[contentLength - 2].opacity = 'opacity';
      }

      if (movement === 'right') {
        this.activeContent = activeContent.slice(startIndex - 1, startIndex - 1 + this.maxActiveContent);
        for (let index = 0; index <= this.activeContent.length - 1; index++) {
          if (index === this.activeContent.length - 1 &&
            this.activeContent[this.activeContent.length - 1].title !== this.content[this.content.length - 1].title) {
            this.activeContent[this.activeContent.length - 1].movement = 'enterLeftOpacity';
          } else {
            this.activeContent[index].movement = 'enterLeft';
          }
        }
      }

      if (movement === 'left') {
        this.activeContent = activeContent.slice(startIndex, startIndex + this.maxActiveContent);
        for (let index = 0; index <= this.activeContent.length - 1; index++) {
          if (index >= this.activeContent.length - 2) {
            this.activeContent[index].movement = 'enterRightOpacity';
          } else {
            this.activeContent[index].movement = 'enterRight';
          }
        }
      }
    }

    if (this.isMobileResolution) {
      if (startIndex === 0 && movement !== 'left' && movement !== 'right') {
        this.mobileContent = activeContent.slice(startIndex + 1, startIndex + 1 + this.maxActiveContent);
      }

      if (movement === 'right') {
        this.mobileContent = activeContent.slice(startIndex + 1, startIndex + 1 + this.maxActiveContent);
        this.mobileContent[0].movement = 'enterLeft';
      }

      if (movement === 'left') {
        this.mobileContent = activeContent.slice(startIndex + 1, startIndex + 1 + this.maxActiveContent);
        this.mobileContent[0].movement = 'enterRight';
      }
    }

  }

  left() {
    if (this.activeContentStartIndex > 0) {
      this.setInitialValues();
      --this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex, 'left');
      this.last = false;
    }

    if (this.activeContentStartIndex === 0) {
      this.first = true;
    }

  }

  right() {

    let lessContent = 0;
    if (this.isMobileResolution) {
       lessContent = 2;
    }

    const maxMovements = this.content.length - this.maxActiveContent - lessContent;

    if (this.activeContentStartIndex <= maxMovements) {
      this.setInitialValues();
      ++this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex, 'right');
      this.first = false;
    }

    if (this.activeContentStartIndex - 1 === maxMovements) {
      this.last = true;
    }


  }

  setInitialValues() {
    if (!this.isMobileResolution) {
      for (let index = 0; index <= this.activeContent.length - 1; index++) {
        this.activeContent[index].movement = 'noMovement';
      }
    } else {
      for (let index = 0; index <= this.mobileContent.length - 1; index++) {
        this.mobileContent[index].movement = 'noMovement';
      }

    }
  }

}

interface IContent {
  title: string;
  text: string;
  icon1: string;
  icon2: string;
  date: string;
  location: string;
  movement: string;
  opacity: string;
  link: string;
}