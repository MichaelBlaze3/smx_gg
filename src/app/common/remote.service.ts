import { Injectable } from '@angular/core';

declare const tizen: any;

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor() { }

  registerRemoteKeys(): void {
    try {
      const suportedKeys = tizen.tvinputdevice.getSupportedKeys();
      suportedKeys.forEach( key => {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(key.name) > -1) {
          tizen.tvinputdevice.registerKey(key.name);
          console.log('Subscribe key: ' + key.name + ' ' + key.code);
        }
      });
    } catch (err) {
      console.log('Error trying to subscribe');
    }
  }
}
