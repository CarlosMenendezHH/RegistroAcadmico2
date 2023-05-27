import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-horarios-materias',
  templateUrl: './consulta-horarios-materias.component.html',
  styleUrls: ['./consulta-horarios-materias.component.css']
})
export class ConsultaHorariosMateriasComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;
  telefono: string | undefined;
  carrera: string | undefined;

  submitForm() {
    // Aquí puedes agregar la lógica para procesar la inscripción
    console.log('Formulario enviado');
  }

}
