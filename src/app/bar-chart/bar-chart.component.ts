import {Component, Input, IterableDiffers, OnInit} from '@angular/core';
import {DataSetService} from '../data-set.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() receivedDataSet;
  avgMoodData;
  differ: any;
  constructor(private dataservice: DataSetService, differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
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
    this.chartDatasets = [this.dataservice.accessAvgMoodData()];
  }
  ngDoCheck() {
    try {
      const change = this.differ.diff(this.dataservice.accessAvgMoodData());
      this.chartDatasets = this.dataservice.accessAvgMoodData();
      // here you can do what you want on array change
      // you can check for forEachAddedItem or forEachRemovedItem on change object to see the added/removed items
      // Attention: ngDoCheck() is triggered at each binded variable on componenet; if you have more than one in your component, make sure you filter here the one you want.
    }
    catch (e) {
      
    }
  }
}
