import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery';
import { usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-menu-principal-e',
  templateUrl: './menu-principal-e.component.html',
  styleUrls: ['./menu-principal-e.component.css'],
  template: `<a href="#" onclick="navigateToLogin()">Cerrar Sesión</a>`
})
export class MenuPrincipalEComponent implements OnInit{
  usuarios: usuario[];

  constructor(private router: Router, private usuarioservice: UsuarioService) { }

  ngOnInit(): void {
    window.onload = function () {
        $('.button_container').click(function () {
            $('.button_container').toggleClass('active');
            $('.menu').toggleClass('open');
        });
    };

    this.usuarioservice.findAll().subscribe(notas => this.usuarios = notas)
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}
