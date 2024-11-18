import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { CorreoPage } from './correo.page';

describe('CorreoPage', () => {
  let component: CorreoPage;
  let fixture: ComponentFixture<CorreoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorreoPage],
      imports: [
        RouterTestingModule, // Para pruebas que involucren enrutamiento
        IonicModule.forRoot() // Importar el módulo de Ionic
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call recuperarContrasena when button is clicked', () => {
    spyOn(component, 'recuperarContrasena'); // Espiar la función

    // Simular clic en el botón
    const button = fixture.nativeElement.querySelector('ion-button');
    button.click();

    expect(component.recuperarContrasena).toHaveBeenCalled(); // Verificar que la función fue llamada
  });
});
