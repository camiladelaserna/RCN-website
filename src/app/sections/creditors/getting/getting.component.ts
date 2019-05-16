import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.scss'],
  animations: LandingAnimations.animations
})
export class GettingComponent implements OnInit {

  content = [
    {icon: '../../../../assets/icons/1.svg',
    title: 'GET CRYPTO',
    data: 'Acquire the network’s eligible lending currencies in exchanges, brokers or peer-to-peer platforms.',
    data2: '',
    data3: '',
    data4: '',
    data5: '',
    target1: '',
    target2: '',
    number: '1'},
    {icon: '../../../../assets/icons/2.svg',
    title: 'FUND THE ACCOUNT',
    data: 'Download ',
    data2: 'Metamask',
    data3: ' plug-in for your browser and transfer funds to the wallet with no minimum amount.',
    data4: '',
    data5: '',
    target1: 'https://metamask.io/',
    target2: '',
    number: '2'},
    {icon: '../../../../assets/icons/3.svg',
    title: 'START LENDING',
    data: 'Access the ',
    data2: 'platform',
    data3: ', complete ',
    data4: 'Civic KYC',
    data5: ' requirements and begin earning passive income.',
    target1: 'https://rcn.loans/',
    target2: 'https://www.civic.com/',
    number: '3'},
    ];

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
  }

}
