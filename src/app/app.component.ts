import { Component } from '@angular/core';
// 1. Importe os componentes standalone do Ionic
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  // 2. Adicione os componentes importados aqui
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}