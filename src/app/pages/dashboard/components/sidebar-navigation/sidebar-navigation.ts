import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.css',
})
export class SidebarNavigation {
  tags = input<string[]>();
}
