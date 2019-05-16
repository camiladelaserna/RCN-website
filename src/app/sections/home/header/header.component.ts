import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from 'src/app/animations/animations';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: LandingAnimations.animations
})

export class HeaderComponent implements OnInit {

  content: IContent[];

  activeContent: IContent[] = [];
  activeContentIndex: number;
  enabledLeft = false;
  first = false;
  last = false;
  screen = 0;

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['how-it-works']);
  }

  ngOnInit() {
    this.content = [
      {
        title0: 'THE RCN',
        title: 'NETWORK',
        img: '../../../../assets/img/slider-RCN_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-RCN_mobile.jpg',
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      },
      {
        title0: '',
        title: 'BLOCKCHAIN GLOBAL LENDING',
        img: '../../../../assets/img/slider-blockchain_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-blockchain_mobile.jpg',
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      },
      {
        title0: 'FRICTIONLESS',
        title: 'DEBT MARKETS',
        img: '../../../../assets/img/slider-frictionless_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-frictionless_mobile.jpg',
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      }
    ];

    this.activeContent.push(this.content[0]);
    this.activeContentIndex = 0;
    this.activeContent[0].fadeIn = 'fadeIn';
    this.first = true;

    setInterval(() => this.changeActiveContent(), 10000);

  }

  changeActiveContent() {
    if (this.activeContentIndex < this.content.length - 1) {
      ++this.activeContentIndex;

    } else {
      this.activeContentIndex = 0;
    }

    if (this.activeContentIndex === 0) {
      this.first = true;
    } else {
      this.first = false;
    }
    if (this.activeContentIndex === this.content.length - 1) {
      this.last = true;
    } else {
      this.last = false;
    }

    this.activeContent.shift();
    this.activeContent.push(this.content[this.activeContentIndex]);

    this.activeContent[0].selected = 'enterLeft';
    this.activeContent[0].fadeIn = 'fadeIn';


  }


  left() {
    if (this.activeContentIndex > 0) {
      this.last = false;
      --this.activeContentIndex;
      if (this.activeContentIndex === 0) {
        this.first = true;
      }
      this.activeContent.shift();
      this.activeContent.push(this.content[this.activeContentIndex]);
      this.activeContent[0].selected = 'enterLeft';
      this.activeContent[0].fadeIn = 'fadeIn';
    }
  }

  right() {
    if (this.activeContentIndex < this.content.length - 1) {
      this.first = false;
      ++this.activeContentIndex;
      if (this.activeContentIndex === this.content.length - 1) {
        this.last = true;
      }
      this.activeContent.shift();
      this.activeContent.push(this.content[this.activeContentIndex]);
      this.activeContent[0].selected = 'enterLeft';
      this.activeContent[0].fadeIn = 'fadeIn';
    }
  }
}

interface IContent {
  title0: string;
  title: string;
  img: string;
  imgMobile: string;
  selected: string;
  fadeIn: string;
}
