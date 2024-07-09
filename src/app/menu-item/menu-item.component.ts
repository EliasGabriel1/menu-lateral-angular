import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MenuItemComponent {
  @Input() item: any;
}
