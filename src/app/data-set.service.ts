import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {
  private subject = new Subject();
  private nut;

  constructor() {
  }

  sendMessage(msg) {
    this.nut = msg;
  }

  accessMessage() {
    return [this.nut];
  }
}
