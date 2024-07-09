import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SidebarComponent] // Importando o SidebarComponent diretamente
})
export class AppComponent {
  title = 'app';
}
