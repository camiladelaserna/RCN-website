import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-origin-char',
  templateUrl: './origin-char.component.html',
  styleUrls: ['./origin-char.component.scss'],
  animations: LandingAnimations.animations
})
export class OriginCharComponent implements OnInit {

  characteristics: ICharacteristic[];

  constructor() { }

  ngOnInit() {

    this.characteristics = [
      {img: '../../../../assets/icons/icon-liquid.png',
      title: 'Globaly Liquid',
      text: 'By accessing global credit supply, Originators can get funding at affordable rates regardless of their local APR.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-term.png',
      title: 'Term Flexible',
      text: 'Debt products can be customized to fit each Originator’s required amount, currency, APR, LTV and maturity, among other parameters.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-plugplay.png',
      title: 'Plug & Play',
      text: 'The RCN protocol allows originators to get integrated using a simple SDK and without requiring any previous blockchain experience.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false}
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