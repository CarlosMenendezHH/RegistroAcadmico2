import { Component, OnInit } from '@angular/core';
import { actividades } from '../models/Actividades';
import { CalendarioacademicoService } from '../services/calendarioacademico.service';

interface CalendarDay {
  date: string;
  day: number;
}

@Component({
  selector: 'app-calendario-academico',
  templateUrl: './calendario-academico.component.html',
  styleUrls: ['./calendario-academico.component.css']
})
export class CalendarioAcademicoComponent implements OnInit{
  currentMonth: Date;
  weeks: CalendarDay[][] = [];
  activities: any[] = [];
  description: string = '';
  descriptionVisible: boolean = false;

  constructor(private activityService: CalendarioacademicoService) {
    this.currentMonth = new Date();
  }

  ngOnInit() {
    this.loadActivities();
    this.generateCalendar();
  }

  loadActivities() {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
    });
  }

  generateCalendar() {
    this.weeks = [];

    const startDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1).getDay();
    const endDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0).getDate();
    const prevMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 0);
    const nextMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 2, 0);

    for (let i = 0; i < startDay + endDay; i++) {
      const date = new Date();

      if (i >= startDay && i < startDay + endDay) {
        date.setFullYear(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), i - startDay + 1);
      } else if (i < startDay) {
        date.setFullYear(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() - startDay + i + 1);
      } else {
        date.setFullYear(nextMonth.getFullYear(), nextMonth.getMonth(), i - startDay - endDay + 1);
      }

      const dateString = date.toISOString().slice(0, 10);
      this.weeks[Math.floor(i / 7)] = this.weeks[Math.floor(i / 7)] || [];
      this.weeks[Math.floor(i / 7)].push({
        date: dateString,
        day: date.getDate()
      });
    }
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
    this.generateCalendar();
  }
  
  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    this.generateCalendar();
  }

  hasActivity(date: string): boolean {
    return this.activities.some(activity => activity.date === date);
  }

  showDescription(day: CalendarDay) {
    const activity = this.activities.find(activity => activity.date === day.date);
    if (activity) {
      this.description = activity.description;
      this.descriptionVisible = true;
    }
  }

  hideDescription() {
    this.descriptionVisible = false;
  }

}
