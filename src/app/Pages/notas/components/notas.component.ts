import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Pages/notas/service/notas.service';
import { notasAcademicas } from 'src/app/Pages/notas/models/notasAcademicas'

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notasAcademicas: notasAcademicas[];
  nombreEstudiante: string;
  carnet: string;
  carrera: string;

  constructor() { }

  ngOnInit(): void {
    this.notasAcademicas
  }

}
