import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-cambio-carrera',
  templateUrl: './solicitud-cambio-carrera.component.html',
  styleUrls: ['./solicitud-cambio-carrera.component.css']
})
export class SolicitudCambioCarreraComponent implements OnInit {

  constructor() { }

  nombre!: string;
  correo!: string;
  carreraActual!: string;
  carreraNueva!: string;
  motivo!: string;

  submitForm() {
    // Aquí puedes agregar la lógica para enviar la solicitud
    console.log('Solicitud enviada');
  }

}
