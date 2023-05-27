import { Component, OnInit } from '@angular/core';

interface CalendarDay {
  date: number;
  event?: string;
}

@Component({
  selector: 'app-calendario-academico',
  templateUrl: './calendario-academico.component.html',
  styleUrls: ['./calendario-academico.component.css']
})
export class CalendarioAcademicoComponent implements OnInit {

  
  public currentMonth: string;
  public weekdays: string[];
  public calendarDays: CalendarDay[];

  constructor() {
    const today = new Date();
    this.currentMonth = this.getMonthName(today.getMonth()) + ' ' + today.getFullYear();
    this.weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    this.calendarDays = this.generateCalendarDays(today.getFullYear(), today.getMonth());
   }
   
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   private getMonthName(month: number): string {
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return monthNames[month];
  }

  private generateCalendarDays(year: number, month: number): CalendarDay[] {
    const days: CalendarDay[] = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      const calendarDay: CalendarDay = {
        date: i
      };

      // Aquí puedes agregar lógica adicional para obtener las actividades correspondientes a cada día
      // y asignarlas a la propiedad 'event' del objeto 'calendarDay'

      days.push(calendarDay);
    }

    const daysFromPreviousMonth = firstDayOfMonth.getDay();
    const daysFromNextMonth = 6 - lastDayOfMonth.getDay();

    for (let i = 0; i < daysFromPreviousMonth; i++) {
      const currentDate = new Date(year, month, -i);
      const calendarDay: CalendarDay = {
        date: currentDate.getDate()
      };

      days.unshift(calendarDay);
    }

    for (let i = 1; i <= daysFromNextMonth; i++) {
      const currentDate = new Date(year, month + 1, i);
      const calendarDay: CalendarDay = {
        date: currentDate.getDate()
      };

      days.push(calendarDay);
    }

    return days;
  }

  public previousMonth(): void {
    // Lógica para mostrar el mes anterior
    // Puedes implementarla según tus necesidades
  }

  public nextMonth(): void {
    // Lógica para mostrar el mes siguiente
    // Puedes implementarla según tus necesidades
  }

  public hasEvent(day: CalendarDay): boolean {
    return day.event !== undefined;
  }

}
