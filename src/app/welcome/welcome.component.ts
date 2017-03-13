import {Component} from '@angular/core';
import {Router} from '@angular/router';

// import { InternalDataService }  from './shared/internalDataservice.component';

@Component({
  selector: 'n-welcome',
  templateUrl: 'app/welcome/welcome.html'
})

export class WelcomeComponent {
  players: number = 1;
  points: number = 0;

  constructor(private _router: Router) { }

  sendSetupObj(): void {
    let errorMessage:string;
    switch(true){
      case (isNaN(+this.players) || isNaN(+this.points)):
      errorMessage = 'The must be numbers';
      return;
      break;
      case (this.players == null || this.points == null):
      errorMessage = 'You must specify both values';
      break;
      case (+this.players <= 0 || +this.players > 8):
      errorMessage = "Can\'t have less than 1 and more than 8 players";
      break;
      case (+this.points > 999):
      errorMessage = "Max 999 points";
      break;
      default
      this.errorMessage = null;
      break
    }
    // if (isNaN(+this.players)
    //   || this.players == null
    //   || +this.players <= 0
    //   || +this.players > 8
    //   || isNaN(+this.points)
    //   || +this.points > 999
    //   || this.points == null) {
    //     alert('Missing setup info');
    //   return;
    // }
    this._router.navigate(['/scoreList', this.players, this.points])
  }
}
