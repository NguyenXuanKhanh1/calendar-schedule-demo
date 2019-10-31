import { Component, OnInit } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
// tslint:disable-next-line: max-line-length
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from 'src/data';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-custom-schedule',
  templateUrl: './custom-schedule.component.html',
  styleUrls: ['./custom-schedule.component.css']
})
export class CustomScheduleComponent implements OnInit {
  public setView: View = 'Month';
  public setDate: Date = new Date(2019, 9, 9);

  public event: EventSettingsModel = {
    dataSource:  extend([], scheduleData, null, true) as []
  };

  constructor() { }

  ngOnInit() {
  }

}
