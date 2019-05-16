import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
	selector: 'app-meet-the-dapp',
	templateUrl: './meet-the-dapp.component.html',
	styleUrls: ['./meet-the-dapp.component.scss'],
	animations: LandingAnimations.animations
})
export class MeetTheDappComponent implements OnInit {

	state = 'hide';
	lineState = 'hide';

	constructor(public el: ElementRef) { }

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

	addClass(id) {
		const element = document.getElementById(id);
		element.classList.add('pulse');
		setTimeout(function () {
			element.classList.remove('pulse');
		}, 1000);
	}

	ngOnInit() {
	}

}
