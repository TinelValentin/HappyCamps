import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from '../../Models/menu-item.interface';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Input() menuItems : MenuItem[] | undefined

  constructor(private router:Router,private auth:AuthService){}

  navigate(menuItem:MenuItem){
    this.router.navigate([menuItem.path])
  }

  LogOut() {
    this.auth.signOut()
    this.router.navigate(['/login'])
  }
}
