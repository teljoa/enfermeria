import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacienteCardComponent } from './paciente-card';

describe('PacienteCardComponent', () => {
  let component: PacienteCardComponent;
  let fixture: ComponentFixture<PacienteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteCardComponent);
    component = fixture.componentInstance;

    component.pacienteInfo = {
      id: 1,
      nombre: 'Test',
      infeccion: 30,
      estado: 'estable',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});