import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-originators',
  templateUrl: './originators.component.html',
  styleUrls: ['./originators.component.scss'],
  animations: LandingAnimations.animations
})
export class OriginatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
