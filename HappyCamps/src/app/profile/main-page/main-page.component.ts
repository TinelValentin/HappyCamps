import { Component } from '@angular/core';
import { MenuItem } from 'src/app/Models/menu-item.interface';
import { NavigationService } from 'src/app/services/shared-module/navigation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  menuItems: MenuItem[] = []

  constructor(private navigationService:NavigationService){}

  ngOnInit() {
    this.menuItems = this.navigationService.getMenuItems()
  }
}
