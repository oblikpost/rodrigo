import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // 1. Precisa importar

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule], // 2. Precisa estar nos imports
})
export class AppComponent {
  constructor() {}
}