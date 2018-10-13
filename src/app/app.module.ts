import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouterModule } from './router-module/my-router.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';
// import { DragDropDirectiveModule} from 'angular4-drag-drop';
// import { DndModule } from 'ngx-drag-drop';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { Garbage } from './game/garbageList';
import { CanList } from './game/canList';
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
    // DragDropDirectiveModule
    // DndModule
    DragAndDropModule
  ],
  providers: [ Garbage, CanList ],
  bootstrap: [AppComponent]
})
export class AppModule { }
