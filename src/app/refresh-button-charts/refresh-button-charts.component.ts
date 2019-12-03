import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BarChartComponent} from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-refresh-button-charts',
  templateUrl: './refresh-button-charts.component.html',
  styleUrls: ['./refresh-button-charts.component.css']
})
export class RefreshButtonChartsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
