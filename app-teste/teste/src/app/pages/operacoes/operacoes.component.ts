import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent implements OnInit {
  [x: string]: any;
  depositoForm: FormGroup;
  retiradaForm: FormGroup;
  saldoBancario: number = 1000;
  movimentos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: UsuarioService,
  ) {
    this.depositoForm = this.formBuilder.group({
      valor: ['', Validators.required]
    });

    this.retiradaForm = this.formBuilder.group({
      valor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.saldoBancario = this['usuarioService'].getSaldo();
  }

  realizarDeposito(): void {
    const valorDeposito = this.depositoForm.get('valor')?.value;
    this['usuarioService'].depositar(valorDeposito);
    this.saldoBancario = this['usuarioService'].getSaldo();
    this.depositoForm.reset();
  }

  realizarRetirada(): void {
    const valorRetirada = this.retiradaForm.get('valor')?.value;
    this['usuarioService'].retirar(valorRetirada);
    this.saldoBancario = this['usuarioService'].getSaldo();
    this.retiradaForm.reset();
  }

  // Função para fazer logout
  logout(): void {
    this['usuarioService'].deslogar();
  }
}



