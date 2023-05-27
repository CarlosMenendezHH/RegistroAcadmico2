import { Component, OnInit } from '@angular/core';
import { horarios } from 'src/app/Pages/horarios/models/horarios';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios: horarios[];

  constructor(private horarioss: HorariosService) { }

  ngOnInit(): void {
    this.horarioss.findAll().subscribe(customer => this.horarios = customer)
  }

}
