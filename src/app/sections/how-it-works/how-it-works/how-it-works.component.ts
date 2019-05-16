import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  animations: LandingAnimations.animations
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
