import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-cambio-carrera',
  templateUrl: './solicitud-cambio-carrera.component.html',
  styleUrls: ['./solicitud-cambio-carrera.component.css']
})
export class SolicitudCambioCarreraComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
