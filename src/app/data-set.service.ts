import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {
  private avgMoodData;
  private distMoodData;

  constructor() {
  }

  sendAvgMoodData(msg) {
    this.avgMoodData = msg;
  }

  accessAvgMoodData() {
    if (this.avgMoodData != null) {
      return [this.avgMoodData];
    }
  }

  sendDistMoodData(msg) {
    this.distMoodData = msg;
  }

  accessDistMoodData() {
    if (this.distMoodData != null) {
      return [this.distMoodData]
    }
  }
}
