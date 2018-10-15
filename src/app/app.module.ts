import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouterModule } from './router-module/my-router.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { Garbage } from './game/garbageList';
import { CanList } from './game/canList';
import { RemoteService } from './common/remote.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule,
    DragAndDropModule
  ],
  providers: [ Garbage, CanList, RemoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
