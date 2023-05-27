import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.component.html',
  styleUrls: ['./cambiar-contra.component.css']
})
export class CambiarContraComponent implements OnInit {

  public oldPassword: string;
  public newPassword: string;
  public confirmPassword: string;
  public message: string;

  constructor() { 
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.message = '';
  }

  ngOnInit(): void {
  }

  public changePassword(): void {
    // Aquí puedes implementar la lógica para cambiar la contraseña
    // Puedes validar las contraseñas y mostrar mensajes de error o éxito

    if (this.newPassword !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
    } else {
      // Aquí puedes realizar la llamada a tu API o servicio para cambiar la contraseña
      // y manejar el resultado en consecuencia, por ejemplo, mostrando un mensaje de éxito
      this.message = 'Contraseña cambiada con éxito.';
    }
  }

}
