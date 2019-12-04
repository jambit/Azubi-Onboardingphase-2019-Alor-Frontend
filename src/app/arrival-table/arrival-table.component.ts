import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-arrival-table',
  templateUrl: './arrival-table.component.html',
  styleUrls: ['./arrival-table.component.css']
})

export class ArrivalTableComponent implements OnInit {
urlArrivalTable;
arrivalTableData;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  elements: any = [
    {id: 1, name: 'Finn', time: '7:45'},
  ];

  headElements = ['#', 'Name', 'Zeit'];
  getArrivalTable(){
    this.http.get(this.urlArrivalTable).subscribe(response => this.arrivalTableData = response);
  }
}
