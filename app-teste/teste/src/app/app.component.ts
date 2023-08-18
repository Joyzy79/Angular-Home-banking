import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service'; // Importe o UsuarioService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usuarioService: UsuarioService) {} // Injete o UsuarioService aqui

  // Implemente a função logout no componente
  logout(): void {
    this.usuarioService.deslogar(); // Chame a função deslogar do UsuarioService
  }
}