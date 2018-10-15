import { Component, HostListener } from '@angular/core';
import { RemoteService } from './common/remote.service';
import { KEY_CODE } from './common/remoteKeyList';
import { Router } from '@angular/router';
import { CanList } from './game/canList';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samex';
  constructor(
    private _remoteService: RemoteService,
    private _router: Router,
    private _canList: CanList
  ) {
    _remoteService.registerRemoteKeys();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.KEY_1) {
      console.log('Reset Game');
      this._canList.resetCanList();
      this._router.navigate(['/landing']);
    }
  }



}
