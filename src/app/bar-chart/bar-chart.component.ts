import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  urlMoodAvgGet = 'http://www.mocky.io/v2/5de5081a2e00004c0031fad0';
  avgMoodData;

  constructor(private http: HttpClient) {
  }

  public chartType = 'bar';

  public chartDatasets: Array<any> = [
    {data: [], label: 'Stimmung'}
  ];

  public chartLabels: Array<any> = ['Stimmung'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(239, 125, 0)',
      ],
      borderColor: [
        'rgba(239, 125, 0)',
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 0.50,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
        }
      }]
    },
    legend: {
      display: false,
      label: {
        defaultFontFamily: 'Quattrocento Sans',
      }
    }
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    this.getMoodAvg();
    console.dir(this.avgMoodData);
    this.chartDatasets = [this.avgMoodData];
  }

  getMoodAvg() {
    return this.http.get(this.urlMoodAvgGet).subscribe(response => this.avgMoodData = response);
  }

  setMoodAvg() {
    this.getMoodAvg();
    console.log(this.avgMoodData);
    this.chartDatasets = [this.avgMoodData];
  }
}
