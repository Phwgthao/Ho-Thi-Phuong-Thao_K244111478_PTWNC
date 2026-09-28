import { Service } from '@angular/core';
import { Product } from './Classess/IProduct';

@Service()
export class ProductService {
    products: Product[] = [
        { id: 1, name: 'Coca', price: 10.99, link: "https://bizweb.dktcdn.net/100/514/431/products/nuoc-ngot-coca-cola-lon-320ml-202304131107525481.jpg?v=1716431193590" },
        { id: 2, name: '7Up', price: 19.99,  link: "https://product.hstatic.net/1000301274/product/_10100996__7up_320ml_sleek_lon_0366766c074a4b538595ed8d91dc6b0d_1024x1024.png" },
        { id: 3, name: 'Mirinda', price: 5.99,  link: "https://img.onelife.vn/UUK9bX_4ksLs4GDCQuixUtqOqNJfxBn9ng5opob_NB4/rs:fit:600:600:1/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3NjX3BjbV9wcm9kdWN0L3Byb2QvMjAyNC8zLzMwLzEyNjA1Ni04OTM0NTg4ODgyMTExLmpwZw.webp" },
        { id: 4, name: 'Pepsi', price: 15.49,  link: "https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_260x260/https://cdnv2.tgdd.vn/bhx-static/bhx/production/2026/9/image/production/2026/9/image/Products/2443/344807/nuoc-ngot-co-ga-vi-phuc-bon-tu-pepsi-khong-duong-lon-320ml_202609141618550452.jpg" },
        { id: 5, name: 'Fanta', price: 8.75,  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy5iE-1UtJb7NFnAbZGhALshrisKVHu-GfMuf1cieq561QW4-ToRlnU0&s=10" }
       ];
    constructor() {}

    getProductList(): Product[] {
        return this.products;
    }

    FilterProductListByPrice(minPrice: number, maxPrice: number): Product[] {
        return this.products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    }
}
