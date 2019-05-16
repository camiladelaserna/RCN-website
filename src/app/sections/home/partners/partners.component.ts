import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  animations: LandingAnimations.animations
})
export class PartnersComponent implements OnInit {
  partners: IPartners[] = [];

  show = false;
  lastIndex = 0;

  activePartner: IPartners = {
    text: '',
    title: '',
    subTitle: '',
    img: '',
    active: false
  };

  state = 'hide';
  lineState = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 700 >= componentPosition) {
      this.state = 'show';
      this.lineState = 'show';
    } else {
      this.state = 'hide';
      this.state = 'hide';
    }

  }

  onClickPartner(partnerName: string) {
    this.show = true;
    const partnerIndex = this.partners.findIndex(partner => partner.title === partnerName);
    this.partners[this.lastIndex].active = false;
    this.lastIndex = partnerIndex;
    this.partners[partnerIndex].active = true;
    this.activePartner = this.partners[partnerIndex];
 }

  addClass(partnerName: string) {
    let element = document.getElementById(partnerName);
    element.classList.add('pulse');
    setTimeout(function(){ 
      element.classList.remove('pulse'); 
    }, 2000);
    }

  close() {
    this.show = false;
    this.activePartner = {
      text: '',
      title: '',
      subTitle: '',
      img: '',
      active: false
    };
  }


  ngOnInit() {
    this.show = false;

    this.partners = [
      {
        text: 'Ripio is one of Latin America’s leading crypto companies, offering blockchain-based brokerage, lending and trading services. Through its integration with the RCN network, Ripio users are able to access global liquidity for funding personal and business loans at competitive rates.',
        title: 'Ripio',
        subTitle: 'Loan Origination',
        img: '../../../../assets/partners/loan-origination.png',
        active: false
      },
      {
        text: 'Bancor is one of the largest decentralized multi-asset liquidity networks on the blockchain ecosystem. Its token exchanging technology enables RCN users to seamlessly lend and borrow in multiple cryptocurrencies, reducing friction and expanding market possibilities.',
        title: 'Bancor Network',
        subTitle: 'Liquidity Provision',
        img: '../../../../assets/partners/liquidity-provision.png',
        active: false
      },
      {
        text: 'Kyber is an on-chain liquidity protocol that allows decentralized token exchanging to be integrated into any application. Its token exchanging technology enables RCN users to seamlessly lend and borrow funds in multiple currencies, reducing friction and expanding market possibilities.',
        title: 'Kyber Network',
        subTitle: 'Liquidity Provision',
        img: '../../../../assets/partners/liquidity-provision.png',
        active: false
      },
      {
        text: "Zeppelin is one of the world’s top blockchain software development companies. Its rigorous auditing process guarantees RCN smart-contracts' compliance with the highest security standards within the industry.",
        title: 'Zeppelin',
        subTitle: 'Security Auditing',
        img: '../../../../assets/partners/security-auditing.png',
        active: false
      },
      {
        text: 'Decentraland is a virtual world where users can build and explore 3D creations, play games and socialize. Through its integration with the RCN network, Decentraland users are able to request loans to purchase LAND parcels on the Decentraland’s marketplace.',
        title: 'Decentraland',
        subTitle: 'Loan Origination',
        img: '../../../../assets/partners/loan-origination.png',
        active: false
      },
      {
        text: 'Metamask is an industry-wide recognized cryptocurrency web wallet, which acts as a bridge between Internet browsers and the Ethereum network. Its simple interface allows RCN Creditors to connect with the platform and safely store or move their funds through the blockchain.',
        title: 'Metamask',
        subTitle: 'Funds Management',
        img: '../../../../assets/partners/funds-management.png',
        active: false
      },
      {
        text: 'Civic is a decentralized identity service provider that employs blockchain technology to enable people to take control of their online identity. By integrating it to the network, RCN is able to provide its users with a private and secure KYC procedure.',
        title: 'Civic',
        subTitle: 'Identity Management',
        img: '../../../../assets/partners/identity-management.png',
        active: false
      },
      {
        text: 'The Ethereum Enterprise Alliance is a growing community of blockchain leaders, adopters, innovators and developers from around the globe. As a member, the RCN network is granted access to top partnership and integration opportunities with key industry stakeholders.',
        title: 'Enterprise Ethereum Alliance',
        subTitle: 'Ecosystem Integration',
        img: '../../../../assets/partners/ecosystem-integration.png',
        active: false
      }
    ];

  }

}

interface IPartners {
  text: string;
  title: string;
  subTitle: string;
  img: string;
  active: boolean;
}