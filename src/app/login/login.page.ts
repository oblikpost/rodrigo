import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 👈 Adicione RouterLink aqui

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink] // 👈 E adicione aqui
})
export class LoginPage {

  constructor(private router: Router) {
    addIcons({ personOutline });
  }

  login() {
    console.log('Login efetuado!');
    this.router.navigateByUrl('/dashboard');
  }

  // Esta função não é mais necessária se você usar [routerLink] no HTML
  irParaCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}