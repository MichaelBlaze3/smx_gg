import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Garbage } from './garbageList';
import { CanList } from './canList';
import { DropEvent, DragEndEvent, DragStartEvent, DragMoveEvent } from 'angular-draggable-droppable';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  droppedData: string;
  garbagePlaylist: any[] = [];
  garbageCans: any;
  areIndicatorsHidden: Boolean = true;
  temporaryItemInteraction: any = {
    index: null,
    category: null,
    answer: false,
    canCategory: null,
    canStatus: false
  };

  constructor(
    private _garbage: Garbage,
    private _canList: CanList,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createGarbageSelection();
    this.createGarbageCans();
  }

  /**
   * @method createGarbageSelection
   * @description Adds new garbage items into our garbage playlist array in random positions.
   */
  createGarbageSelection(): void {
    this.garbagePlaylist.push(this._garbage.getAluminumRandomItem());
    this.garbagePlaylist.push(this._garbage.getOrganicRandomItem());
    this.garbagePlaylist.push(this._garbage.getPaperRandomItem());
    this.garbagePlaylist.push(this._garbage.getPlasticRandomItem());
    this.randomizeMyArray();
  }

  createGarbageCans(): void {
    this.garbageCans = this._canList.getCanStatus();
  }

  /**
   * @method randomizeMyArray
   * @description Sorts the garbagePlaylist array in a random way
   */
  randomizeMyArray(): void {
    const garbagePlaylistSize: number = this.garbagePlaylist.length;
    for (let i: number = garbagePlaylistSize - 1; i > 0; i--) {
      const r = Math.floor((Math.random() * i));
      const item: any = this.garbagePlaylist[i];
      this.garbagePlaylist[i] = this.garbagePlaylist[r];
      this.garbagePlaylist[r] = item;
    }
  }

  /**
   * @method dragStarted
   * @description Method triggers when an item starts the draggin motion
   * @param ev Drag event when element starts dragging motion
   */
  dragStarted(ev: any): void {
    // console.log(ev);
    this.temporaryItemInteraction = {};
    this.temporaryItemInteraction.index = ev.index;
    this.temporaryItemInteraction.category = ev.item.category;
  }

  dragEnd(ev: any, canObj: any): void {

  }

  dropEvent(ev: DropEvent, canObj: any): void {
    // console.log(canObj);
    if (canObj.category === this.temporaryItemInteraction.category) {
      this.temporaryItemInteraction.answer = true;
    } else {
      this.temporaryItemInteraction.answer = false;
    }
    if (!this.garbageCans[canObj.category].full) {
      this.temporaryItemInteraction.canCategory = canObj.category;
      this.temporaryItemInteraction.canStatus = true;
      this._canList.updateCanStatus(this.temporaryItemInteraction);
      this.removeItemFromMyArray();
      this.createGarbageCans();
    } else {
      console.log('Garbage can is full');
    }

  }

  removeItemFromMyArray(): void {
    this.garbagePlaylist.splice(this.temporaryItemInteraction.index, 1);
    if (this.garbagePlaylist.length === 0) {
      this.areIndicatorsHidden = false;
      setTimeout(() => {
        this._router.navigate(['/results']);
      }, 3000);
    }

  }

}
