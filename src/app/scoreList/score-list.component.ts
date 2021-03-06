import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'n-list',
  templateUrl: 'app/scoreList/score-list.html'
})

export class ScoreListComponent implements OnInit {
	private setupObj:Object;
	private playersArr:any[];

	constructor(private _route: ActivatedRoute, private _router: Router) { }

	ngOnInit():void {
		this.setupObj = this._route.snapshot.params;
		this.playersArr = Array(+this.setupObj['players']).fill(+this.setupObj['points']);
		console.log(typeof(this.setupObj['players']),this.playersArr);
  }

  restart():void {
    this._router.navigate(['/welcome']);
  }
}
