import {Injectable} from '@angular/core';
import {BarChartComponent} from './bar-chart/bar-chart.component';

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
      return [this.avgMoodData];
  }

  sendDistMoodData(msg) {
    this.distMoodData = msg;
  }

  accessDistMoodData() {
      return this.distMoodData;
  }
}
