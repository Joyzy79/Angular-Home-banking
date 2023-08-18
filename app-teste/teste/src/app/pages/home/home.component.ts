import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Definir o saldo bancário inicial
  saldoBancario: number = 1000;

  // Definir uma lista de movimentações com exemplos
  movimentos = [
    { icone: 'shopping_cart', item: 'Mercado', valor: 100, data: '2023-08-10' },
    { icone: 'flash_on', item: 'Energia', valor: 50, data: '2023-08-09' },
    { icone: 'fitness_center', item: 'Academia', valor: 30, data: '2023-08-08' },
    { icone: 'local_pharmacy', item: 'Farmácia', valor: 25, data: '2023-08-07' },
    { icone: 'shopping_basket', item: 'Shopping', valor: 200, data: '2023-08-06' }
  ];
}
