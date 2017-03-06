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
    this._router.navigate(['/scoreList', this.players, this.points])
  }
}
