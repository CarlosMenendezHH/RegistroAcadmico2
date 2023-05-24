import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-academico',
  templateUrl: './calendario-academico.component.html',
  styleUrls: ['./calendario-academico.component.css']
})
export class CalendarioAcademicoComponent implements OnInit {
  activities: { [key: string]: string } = {};

  constructor() { }

  ngOnInit(): void {
    this.activities = this.activities || {};

    if (Object.keys(this.activities).length === 0) {
      this.activities['2023-01-05'] = 'Actividad 1';
      this.activities['2023-01-15'] = 'Actividad 2';
      this.activities['2023-02-10'] = 'Actividad 3';
      this.activities['2023-02-20'] = 'Actividad 4';
      this.activities['2023-03-08'] = 'Actividad 5';
    }
  }

  onDayRender(day: any) {
    const formattedDate = this.formatDate(day.date);
    if (formattedDate in this.activities) {
      // Cambiar el color de fondo si el día tiene una actividad
      day.cssClass = 'event-day';

      // Agregar el atributo "title" para mostrar la descripción en el tooltip
      day.attributes['title'] = this.activities[formattedDate];
    }
  }

  onSelectionChanged(selectedDate: Date) {
    const formattedDate = this.formatDate(selectedDate);
    if (formattedDate in this.activities) {
      const description = this.activities[formattedDate];
      // Mostrar la descripción en el div emergente
      const descriptionDiv = document.getElementById('DivDescription');
      if (descriptionDiv) {
        descriptionDiv.innerText = description;
        descriptionDiv.style.display = 'block';
      }
    } else {
      // Ocultar el div emergente
      const descriptionDiv = document.getElementById('DivDescription');
      if (descriptionDiv) {
        descriptionDiv.style.display = 'none';
      }
    }
  }

  private formatDate(date: Date): string {
    // Formatear la fecha como 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
