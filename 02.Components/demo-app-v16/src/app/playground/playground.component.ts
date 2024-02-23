import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy{

  @Input('color') colorValue='white';


  isToggle = false;
  badCurly='bad-curly';
  imgUrl = 'https://hips.hearstapps.com/hmg-prod/images/still-life-image-of-beautiful-pink-orchid-flowers-royalty-free-image-1702918746.jpg?crop=0.668xw:1.00xh;0.127xw,0&resize=340:*'


  // Lifecycle hooks 
  ngOnInit(){
    console.log('Component Created!');
  }

   ngAfterViewInit(){
    console.log('After Init');
   }

   ngOnDestroy(){
    console.log('On destroy');
    // clean up 
   }


  handleClick() {
    console.log('clicked');
    this.isToggle = !this.isToggle;
  }
}
