import { Component } from '@angular/core';
import { GroceryListComponent } from '../grocery-list/grocery-list.component';
import { AddGroceryComponent } from '../add-grocery/add-grocery.component';

type Grocery = {
  id: number;
  name: string;
  quantity: number;
};

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [GroceryListComponent, AddGroceryComponent],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
})
export class GroceryComponent {
  groceries: Grocery[] = [
    { id: 1, name: 'Tomatoes', quantity: 3 },
    { id: 2, name: 'Milk', quantity: 1 },
  ];

  addGrocery(item: Grocery) {
    this.groceries.push(item);
  }
}
