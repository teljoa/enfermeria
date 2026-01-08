import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Paciente {
  id: number;
  nombre: string;
  infeccion: number;
  estado: 'estable' | 'critico' | 'transformado';
}

@Component({
  selector: 'app-paciente-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente-card.html',
  styleUrls: ['./paciente-card.css'],
})
export class PacienteCardComponent {
  @Input() pacienteInfo!: Paciente;

  @Output() curarClick = new EventEmitter<void>();
  @Output() bajaClick = new EventEmitter<number>();

  get colorBarra(): string {
    return this.pacienteInfo.infeccion > 50 ? 'red' : 'lime';
  }
}