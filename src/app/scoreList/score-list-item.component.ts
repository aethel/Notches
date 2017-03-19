import {Component, Input} from '@angular/core';

@Component({
  selector: 'n-item',
  templateUrl: 'app/scoreList/score-list-item.html'
})

export class ScoreListItemComponent {
  step:number = 1;

  @Input()
  points: number = 0;

  @Input('index')
  playerAlias:number = 0;

  add():void {
    this.points += this.step;
  }

  subtract():void {
    this.points -= this.step;
  }

  press(event:any) {
    console.log('longpressParent', event);
  }


  longPressingAdd(event:any) {
    this.points += this.step*10;

  }

  longPressingSubtract(event:any) {
    this.points -= this.step*10;

  }
}
