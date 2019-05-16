import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-cred-header',
  templateUrl: './cred-header.component.html',
  styleUrls: ['./cred-header.component.scss'],
  animations: LandingAnimations.animations
})
export class CredHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
