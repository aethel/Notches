import {Component, Input} from '@angular/core';

@Component({
  selector: 'n-item',
  templateUrl: 'app/scoreList/score-list-item.html'
})

export class ScoreListItemComponent {
  @Input()
  points: number = 0;

  @Input('index')
  playerAlias:number = 0;

  add():void {
    this.points += 1;
  }

  subtract():void {
    this.points -= 1;
  }
}
