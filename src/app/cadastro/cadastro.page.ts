import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 👈 Adicione RouterLink aqui

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink] // 👈 E adicione aqui
})
export class CadastroPage {

  constructor(private router: Router) {
    addIcons({ personOutline });
  }

  // Esta função não é mais necessária se você usar [routerLink] no HTML
  irParaLogin() {
    this.router.navigateByUrl('/login');
  }

  cadastrar() {
    console.log('Cadastrando...');
    this.router.navigateByUrl('/dashboard');
  }
}