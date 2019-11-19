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
urlMoodSelectPost = 'http://10.3.4.114:4200/Gradle___Alor_Backend_war/rest/mdm/create';
moodSelection: string;
possibilities: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
onItemChange(value) {
  this.moodSelection = value;
  console.log(' Wert: ', value);
}
  postMoodSelection() {
    this.http.post(this.urlMoodSelectPost, this.moodSelection).subscribe();
  }

  ngOnInit() {
  }

}
