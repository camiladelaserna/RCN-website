import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { LandingAnimations } from '../../../animations/animations';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  animations: LandingAnimations.animations
})
export class CharacteristicsComponent implements OnInit {

  characteristics: ICharacteristic[];
  state = 'hide';
  lineState = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 750 >= componentPosition) {
      this.state = 'show';
      this.lineState = 'show';
    } else {
    }

  }

  ngOnInit() {
    this.characteristics = [
      {
        img: '../../../../assets/icons/icon-frictionless.svg',
        text: 'By reducing fees and eliminating entry barriers the network increases efficiency throughout the lending process.',
        title: 'Frictionless', selected: 'notSelected', opacity: 'notOpacity', expanded : false
      },
      {
        img: '../../../../assets/icons/icon-transparent.svg',
        text: 'RCN smart-contracts ensure non-custodial storage of all funds and full auditability of every transaction.',
        title: 'Transparent', selected: 'notSelected', opacity: 'notOpacity', expanded : false
      },
      {
        img: '../../../../assets/icons/icon-borderless.svg',
        text: 'The network seamlessly connects borrowers and creditors from all around the world.',
        title: 'Borderless', selected: 'notSelected', opacity: 'notopacity', expanded : false
      }
    ];
  }



  updateNoSelections() {
    for (const characteristic of this.characteristics) {
        characteristic.selected = 'notSelected';
        characteristic.opacity = 'notOpacity';
        characteristic.expanded = false;
    }
  }


   updateCharacteristics(title: string) {
        for (const characteristic of this.characteristics) {
          if (characteristic.title !== title) {
            characteristic.selected = 'notSelected';
            characteristic.opacity = 'opacity';
            characteristic.expanded = false;
          } else {
            characteristic.selected = 'selected';
            characteristic.opacity = 'notOpacity';
            characteristic.expanded = true;
          }
        }
  }

}

interface ICharacteristic {
  img: string;
  title: string;
  text: string;
  selected: string;
  opacity: string;
  expanded: boolean;
}
