import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mood-ometer',
  templateUrl: './mood-ometer.component.html',
  styleUrls: ['./mood-ometer.component.css']
})
export class MoodOMeterComponent implements OnInit {
  constructor(private http: HttpClient) {}
urlMoodSelectPost = 'http://10.0.0.154:8080/alorwebapp/rest/MoodMeter/create';
moodSelection: string;
possibilities: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
onItemChange(value) {
  this.moodSelection = value;
  console.log(' Wert: ', value);
}
  postMoodSelection() {
    console.log(this.http.post(this.urlMoodSelectPost, this.moodSelection).subscribe());
  }

  ngOnInit() {
  }

}
