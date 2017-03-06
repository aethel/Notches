import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './welcome/welcome.component';
import { ScoreListComponent }  from './scoreList/score-list.component';
import { ScoreListItemComponent }  from './scoreList/score-list-item.component';
import { InternalDataService }  from './shared/internalDataservice.component';

@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
     RouterModule.forRoot([
       {path: 'welcome', component: WelcomeComponent},
       {path: 'scoreList/:players/:points', component: ScoreListComponent},
       {path: '', redirectTo: 'welcome', pathMatch: 'full'}
     ],{useHash:true}) ],
  declarations: [
		AppComponent,
		ScoreListComponent,
		ScoreListItemComponent,
		WelcomeComponent
	],
	providers: [InternalDataService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
