import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-cred-characteristics',
  templateUrl: './cred-characteristics.component.html',
  styleUrls: ['./cred-characteristics.component.scss'],
  animations: LandingAnimations.animations
})
export class CredCharacteristicsComponent implements OnInit {

  characteristics: ICharacteristic[];

  constructor() { }

  ngOnInit() {
    this.characteristics = [
      {img: '../../../../assets/icons/icon-multicurrency.svg',
      title: 'Multicurrency',
      text: 'The decentralized marketplace allows creditors to make loans in a variety of lending and borrowing currencies.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-competitive.svg',
      title: 'Competitive',
      text: 'By accessing emerging debt markets, RCN creditors can fund high-yield loans and earn passive income at attractive interest rates.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-risk.svg',
      title: 'Risk Versatile',
      text: 'Whether cosigned or backed by crypto collateral, all the network’s loans count with a risk strategy to manage the Creditor’s exposure.',
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
