import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage {

  // Lista de mensagens
  private mensagens: string[] = [
    "Que bom te ver por aqui!",
    "Viva o Mundo Real!",
    "Seja bem-vindo(a) de volta!",
    "O seu dia vai ser incrível!",
    "Que a força esteja com você."
  ];

  // Variável para guardar a mensagem da vez
  public mensagemAleatoria: string = "";

  constructor(private router: Router) { }

  // ionViewWillEnter é executado TODA vez que a página é exibida
  ionViewWillEnter() {
    this.gerarMensagemAleatoria();
  }

  gerarMensagemAleatoria() {
    // Escolhe um índice aleatório da lista
    const index = Math.floor(Math.random() * this.mensagens.length);
    this.mensagemAleatoria = this.mensagens[index];
  }

  logout() {
    this.router.navigateByUrl('/home');
  }
}