import { Component } from '@angular/core';
import { Product } from '../Classess/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, link: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, link: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 5.99, link: 'Description for Product 3' },
    { id: 4, name: 'Product 4', price: 15.49, link: 'Description for Product 4' },
    { id: 5, name: 'Product 5', price: 8.75, link: 'Description for Product 5' },
    { id: 6, name: 'Product 6', price: 12.99, link: 'Description for Product 6' },
    { id: 7, name: 'Product 7', price: 25.99, link: 'Description for Product 7' }
  ];
}

