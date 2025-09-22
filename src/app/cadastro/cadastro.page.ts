import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage {

  constructor(private router: Router) { }

  irParaLogin() {
    this.router.navigateByUrl('/login');
  }

  cadastrar() {
    console.log('Cadastrando...');
    // NAVEGAÇÃO ALTERADA: Agora vai para /dashboard
    this.router.navigateByUrl('/dashboard');
  }
}