import { Component } from '@angular/core';
// IMPORTANTE: Importe tudo que for usar
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Para navegação


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  // IMPORTANTE: Adicione os módulos aqui
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {

  // Injetar o Router
  constructor(private router: Router) { }

  // Função (simulada) de login
  login() {
    console.log('Login efetuado!');
    // Redireciona para o dashboard após o login
    this.router.navigateByUrl('/dashboard');
  }

  // Função para navegar para a página de cadastro
  irParaCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}