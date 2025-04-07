import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  product: any;


  constructor(private dataService: DataService) {}

  products: any[] = [];

  loading = true;

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getProducts().subscribe((data) => {
      this.products = data.products || [];
      this.loading = false;
    }, (error) => {
      console.error(error);
      this.loading = false;
    });
  }
  
  
}
