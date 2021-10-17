import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];
  grandTotal = 0;

  addToCart(product) {
  
    this.grandTotal += product.price;
    this.items.push(product);

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.items.map((a : any) => {
  //     grandTotal += a.price;
  //   })
  //   return grandTotal;
  // }

  constructor(private http: HttpClient) {}
}