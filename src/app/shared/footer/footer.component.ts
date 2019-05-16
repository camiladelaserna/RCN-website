import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  counter = 0;
  
  constructor() { }
  

  addClass(net) {
    this.counter++
    if (this.counter >= 5) {
      let element = document.getElementById(net);
      element.classList.add('bounce');
      setTimeout(function(){ 
      element.classList.remove('bounce'); 
    }, 1000);
    this.counter = 0;
    }
    
    }

  ngOnInit() {
  }

}
