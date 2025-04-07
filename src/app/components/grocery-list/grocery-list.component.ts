import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

type Grocery = {
  id: number;
  name: string;
  quantity: number;
};

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent {
  @Input() items: Grocery[] = [];
}
