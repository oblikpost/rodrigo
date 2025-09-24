import { Component } from '@angular/core';
// 1. IMPORTAR O ROUTERLINK
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Adicione esta linha

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // 2. ADICIONAR O ROUTERLINK AQUI
  imports: [IonicModule, RouterLink, FormsModule], // Adicione FormsModule aqui
})
export class HomePage {
  constructor() {}
}