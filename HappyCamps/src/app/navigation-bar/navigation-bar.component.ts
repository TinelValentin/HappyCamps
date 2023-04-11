import { Component, Input } from '@angular/core';
import { MenuItem } from '../Models/menu-item.interface';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Input() menuItems : MenuItem[] | undefined
}
