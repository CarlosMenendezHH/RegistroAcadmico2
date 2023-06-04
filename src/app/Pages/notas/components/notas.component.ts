import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Pages/notas/service/notas.service';
import { notasAcademicas } from 'src/app/Pages/notas/models/notasAcademicas'
import { EstudiantesserviceService } from '../service/estudiantesservice.service';
import { estudiantes } from '../models/estudiantes';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notasAcademicas: notasAcademicas[];
  estudiante: estudiantes[];

  constructor(private notas: NotasService, private estudiantes: EstudiantesserviceService) { }

  ngOnInit(): void {
    this.notas.findAll().subscribe(notas => this.notasAcademicas = notas)
    this.estudiantes.findAll().subscribe(estudiante => this.estudiante = estudiante)
  }

  trackByCustomer(index: number, customer: notasAcademicas): string {
    return customer.materia; // o cualquier otra propiedad única
  }

}
