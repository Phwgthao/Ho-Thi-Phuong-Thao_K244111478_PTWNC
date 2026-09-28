import { Component } from '@angular/core';
import { Product } from '../Classess/IProduct';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  min_price: number = 0;
  max_price: number = 1000;
  products: Product[] = [];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProductList();
  }

  callFilterProductListByPrice(): void {
    this.products = this.ps.FilterProductListByPrice(this.min_price, this.max_price);
  }
}
