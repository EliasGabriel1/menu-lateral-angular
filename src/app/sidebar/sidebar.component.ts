import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, MenuItemComponent]
})
export class SidebarComponent {
  menuItems = [
    { title: 'Item de menu - Menu 1', children: null },
    { title: 'Item de menu - Menu 2', children: [
      { title: 'Item de menu - Submenu 2.1', children: null },
      { title: 'Item de menu - Submenu 2.2', children: null }
    ]},
    { title: 'Item de menu - Menu 3', children: [
      { title: 'Item de menu - Submenu 3.1', children: [
        { title: 'Item de menu - Submenu 3.1.1', children: null }
      ]}
    ]},
    { title: 'Item de menu - Menu 4', children: null },
    { title: 'Item de menu - Menu 5', children: null },
    { title: 'Item de menu - Menu 6', children: null },
    { title: 'Item de menu - Menu 7', children: null },
    { title: 'Item de menu - Menu 8', children: null },
    { title: 'Item de menu - Menu 9', children: null },
    { title: 'Item de menu - Menu 10', children: null },
    { title: 'Item de menu - Menu 11', children: null },
    { title: 'Item de menu - Menu 12', children: null },
    { title: 'Item de menu - Menu 13', children: null },
    { title: 'Item de menu - Menu 14', children: null },
    { title: 'Item de menu - Menu 15', children: null },
  ];
}
