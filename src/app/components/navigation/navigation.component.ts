import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgFor],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  
})
export class NavigationComponent {
  navLinks = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'news', label: 'News' },
    { path: 'grocery', label: 'Grocery' },
    { path: 'api-data', label: 'Products' },
    { path: 'form', label: 'Contact' }
  ];
}
