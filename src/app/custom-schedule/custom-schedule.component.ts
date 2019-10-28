import { Component, OnInit } from '@angular/core';
import { View } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-custom-schedule',
  // template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './custom-schedule.component.html',
  styleUrls: ['./custom-schedule.component.css']
})
export class CustomScheduleComponent implements OnInit {
  public setView: View = 'Month';
  public setDate: Date = new Date(2019);
  constructor() { }

  ngOnInit() {
  }

}
