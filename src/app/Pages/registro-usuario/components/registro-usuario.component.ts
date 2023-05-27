import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Usuario {
  idUsuario: number;
  credencial: string;
  clave: string;
  idRol: number;
  rol: string;
  estado: boolean;
}

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  public Usuarios: Usuario[];
  public nuevoUsuario: Usuario;

  constructor(private http: HttpClient) {
    this.Usuarios = [];
    this.nuevoUsuario = {
      idUsuario: 0,
      credencial: '',
      clave: '',
      idRol: 0,
      rol: '',
      estado: true
    };
   }

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios(): void {
    this.http.get<Usuario[]>('URL_DE_TU_API_REST').subscribe(
      (data: Usuario[]) => {
        this.Usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  public agregarUsuario(): void {
    this.http.post('URL_DE_TU_API_REST', this.nuevoUsuario).subscribe(
      (response) => {
        // Actualizar la lista de usuarios después de agregar uno nuevo
        this.getUsuarios();

        // Restablecer el formulario
        this.nuevoUsuario = {
          idUsuario: 0,
          credencial: '',
          clave: '',
          idRol: 0,
          rol: '',
          estado: true
        };
      },
      (error) => {
        console.error('Error al agregar el usuario:', error);
      }
    );
  }

  public actualizarUsuario(): void {
    this.http.put('URL_DE_TU_API_REST/' + this.nuevoUsuario.idUsuario, this.nuevoUsuario).subscribe(
      (response) => {
        // Actualizar la lista de usuarios después de actualizar uno existente
        this.getUsuarios();

        // Restablecer el formulario
        this.nuevoUsuario = {
          idUsuario: 0,
          credencial: '',
          clave: '',
          idRol: 0,
          rol: '',
          estado: true
        };
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }

  public editarUsuario(usuario: Usuario): void {
    // Asignar los datos del usuario seleccionado al formulario de edición
    this.nuevoUsuario = { ...usuario };
  }

  public eliminarUsuario(idUsuario: number): void {
    this.http.delete('URL_DE_TU_API_REST/' + idUsuario).subscribe(
      (response) => {
        // Actualizar la lista de usuarios después de eliminar uno existente
        this.getUsuarios();
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }

}
