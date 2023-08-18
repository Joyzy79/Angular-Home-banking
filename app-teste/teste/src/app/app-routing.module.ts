import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';
import { ContacteNosComponent } from './pages/contacte-nos/contacte-nos.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {path: '', component: PrincipalComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      {path: '', component: HomeComponent}
],
  },
  {path:'operacoes', component: OperacoesComponent , canActivate: [UsuarioAutenticadoGuard]},
  {path:'movimentacao', component: MovimentacaoComponent, canActivate: [UsuarioAutenticadoGuard]}, 
  {path:'contacte-nos', component: ContacteNosComponent, canActivate: [UsuarioAutenticadoGuard]}    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
