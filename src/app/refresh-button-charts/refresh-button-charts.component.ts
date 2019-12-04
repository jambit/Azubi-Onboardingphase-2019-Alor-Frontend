import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataSetService} from '../data-set.service';

@Component({
  selector: 'app-refresh-button-charts',
  templateUrl: './refresh-button-charts.component.html',
  styleUrls: ['./refresh-button-charts.component.css']
})
export class RefreshButtonChartsComponent implements OnInit {
  constructor(private http: HttpClient, private dataservice: DataSetService) {
  }

  @Output() dataSetToEmit = new EventEmitter();
  //Will be replaced as soon as rasperry backend is available
  urlMoodAvgGet4H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/avg?=4';
  urlMoodAvgGet24H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/avg?=24';
  urlMoodAvgGet48H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/avg?=48';
  urlMoodDistGet4H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/dist?=4';
  urlMoodDistGet24H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/dist?=24';
  urlMoodDistGet48H = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/dist?=48';
  avgMoodData;
  distMoodData;

  ngOnInit() {
    this.getMoodAvg('4h');
    console.dir(this.avgMoodData);
  }

  getMoodAvg(h) {
    if (h == '4h') {
      return this.http.get(this.urlMoodAvgGet4H).subscribe(response => this.avgMoodData = response);
    } else if (h == '24h') {
      return this.http.get(this.urlMoodAvgGet24H).subscribe(response => this.avgMoodData = response);
    } else if (h == '48h') {
      return this.http.get(this.urlMoodAvgGet48H).subscribe(response => this.avgMoodData = response);
    }
  }

  getMoodDist(h) {
    if (h == '4h') {
      return this.http.get(this.urlMoodDistGet4H).subscribe(response => this.distMoodData = response);
    } else if (h == '24h') {
      return this.http.get(this.urlMoodDistGet24H).subscribe(response => this.distMoodData = response);
    } else if (h == '48h') {
      return this.http.get(this.urlMoodDistGet48H).subscribe(response => this.distMoodData = response);
    }
  }

  setMood(h) {
    if (h == '4h') {
      this.getMoodAvg('4h');
      this.getMoodDist('4h');
    } else if (h == '24h') {
      this.getMoodAvg('24h')
      this.getMoodDist('24h');
    } else if (h == '48h') {
      this.getMoodAvg('48h')
      this.getMoodDist('48h')
    }
    console.log(this.avgMoodData);
    this.dataservice.sendAvgMoodData(this.avgMoodData);
    this.dataservice.sendDistMoodData(this.distMoodData);
  }
}
