import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { GameComponent } from '../game/game.component';
import { ResultsComponent } from '../results/results.component';
const myRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'game', component: GameComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes, { enableTracing: false})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MyRouterModule { }
