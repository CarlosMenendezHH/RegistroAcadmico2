import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { grupos } from '../models/grupos';
import { GruposServiceService } from '../services/grupos-service.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: grupos[];

  constructor(private gruposservice: GruposServiceService) { 
    
  }

  ngOnInit(): void {
    this.gruposservice.findAll().subscribe(grupos => this.grupos = grupos)
  }

  trackByCustomer(index: number, customer: grupos): string {
    return customer.grupo; // o cualquier otra propiedad única
  }

}
