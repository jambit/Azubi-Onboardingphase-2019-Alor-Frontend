import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood-ometer',
  templateUrl: './mood-ometer.component.html',
  styleUrls: ['./mood-ometer.component.css']
})
export class MoodOMeterComponent implements OnInit {
userChoice: string;
radioChoice: string;
possibilities: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
onItemChange(value) {
  this.radioChoice = value;
  console.log(' Wert: ', value);
}
onSendClick(value) {
  
}
  constructor() { }

  ngOnInit() {
  }

}
