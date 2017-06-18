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
  private orientation:any;


	constructor(private _route: ActivatedRoute, private _router: Router) {
  }

	ngOnInit():void {
		this.setupObj = this._route.snapshot.params;
		this.playersArr = Array(+this.setupObj['players']).fill(+this.setupObj['points']);
		console.log(typeof(this.setupObj['players']),this.playersArr);
    // this.orientationChange();
  }

  restart():void {
    this._router.navigate(['/welcome']);
  }

  // orientationChange():void{
  //   window.addEventListener('orientationchange', function(){
  //     console.log(window.screen.orientation.type);
  //   }, false);
  // }
}
