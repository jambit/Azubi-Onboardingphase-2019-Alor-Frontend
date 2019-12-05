import {Component, IterableDiffers, OnInit} from '@angular/core';
import {DataSetService} from "../data-set.service";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  differ: any;
  test = [10, 30, 30, 11, 0, 0, 0, 0, 0, 0];
  constructor(private dataservice: DataSetService, differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  public chartType = 'pie';
  data;

  public chartDatasets: Array<any> = [
    {data: [], label: 'Votes'}
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
 ngDoCheck() {
    try {
      const change = this.differ.diff(this.dataservice.accessDistMoodData());
      this.chartDatasets = [{data: this.dataservice.accessDistMoodData()}]
      // here you can do what you want on array change
      // you can check for forEachAddedItem or forEachRemovedItem on change object to see the added/removed items
      // Attention: ngDoCheck() is triggered at each binded variable on componenet; if you have more than one in your component, make sure you filter here the one you want.
    }
    catch (e) {

    }
  }

  ngOnInit(): void {
  }
}
