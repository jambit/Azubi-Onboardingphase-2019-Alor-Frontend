import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataSetService} from '../data-set.service';

@Component({
  selector: 'app-refresh-button-charts',
  templateUrl: './refresh-button-charts.component.html',
  styleUrls: ['./refresh-button-charts.component.css']
})
export class RefreshButtonChartsComponent implements OnInit {
  constructor(private http: HttpClient, private dataservice: DataSetService) { }
  @Output() dataSetToEmit = new EventEmitter();
  //Will be replaced as soon as rasperry backend is available
  urlMoodAvgGet = 'http://10.0.0.150:4200/alorwebapp/rest/MoodMeter/avg';
  avgMoodData;

  ngOnInit() {
    this.getMoodAvg();
    console.dir(this.avgMoodData);
  }
  getMoodAvg() {
    return this.http.get(this.urlMoodAvgGet).subscribe(response => this.avgMoodData = response);
  }
  setMoodAvg() {
    this.getMoodAvg();
    console.log(this.avgMoodData);
    this.dataservice.sendMessage(this.avgMoodData);
  }
}
