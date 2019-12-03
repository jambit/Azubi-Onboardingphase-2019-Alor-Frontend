import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  constructor(private http: HttpClient) {
  }

  public chartType = 'pie';
  urlMoodDistGet = 'http://10.3.4.114:4200/Gradle___Alor_Backend_war/rest/mdm/dist';
  data;

  public chartDatasets: Array<any> = [
    {data: [300, 50, 100, 40, 120, 50, 200, 40, 10, 45], label: 'Votes'}
  ];

  public chartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#58FA58', '#0040FF', '#CC2EFA', '#088A29', '#EF7D00'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#81F781', '#2E64FE', '#D358F7', '#04B431', '#EB973B'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      position: 'bottom',
      display: true,
    },
    tooltips: {
      enabled: false
    }
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  reload() {
    this.data = this.http.get(this.urlMoodDistGet);
    console.log(this.data);
  }
}
