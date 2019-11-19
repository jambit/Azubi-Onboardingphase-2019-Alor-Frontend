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
userChoice;
url = 'http://10.3.4.114:4200/Gradle___Alor_Backend_war/rest/mdm/create';
radioChoice: string;
possibilities: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
onItemChange(value) {
  this.radioChoice = value;
  console.log(' Wert: ', value);
}
  addEntry() {
    return this.http.post(this.url, this.radioChoice).subscribe();
  }

  ngOnInit() {
  }

}
