import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

type Grocery = {
  id: number;
  name: string;
  quantity: number;
};

@Component({
  selector: 'app-add-grocery',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css'],
})
export class AddGroceryComponent {
  @Output() addGrocery: EventEmitter<Grocery> = new EventEmitter<Grocery>();

  onSubmit(form: NgForm) {
    const newItem: Grocery = {
      id: Math.floor(Math.random() * 1000),
      name: form.value.name,
      quantity: parseInt(form.value.quantity),
    };
    this.addGrocery.emit(newItem);
    form.reset();
  }
}
