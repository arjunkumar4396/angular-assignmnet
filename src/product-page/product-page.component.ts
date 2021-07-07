import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  productList: any;
  copyOfList: any;
  searchKeys = '';
  cartItems = [] as any;
  items: any;
  cartCount = 0;
  totalPrice = 0;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProductList();
    this.getCartItems();
  }

  getProductList() {
    this.http
      .get('https://fakestoreapi.com/products')
      .toPromise()
      .then((res) => {
        this.productList = res;
        this.copyOfList = res;
      });
  }
  addToCart(event: any) {
    let oldItems: any = window.localStorage.getItem('cartItems');
    let newObj = JSON.parse(oldItems);
    newObj.push({ id: event.id, price: event.price });
    window.localStorage.setItem('cartItems', JSON.stringify(newObj));
    this.getCartItems();
  }

  getCartItems() {
    this.totalPrice = 0;
    this.items = window.localStorage.getItem('cartItems');
    let parsedObj = JSON.parse(this.items);
    this.items = [...new Map(parsedObj.map((e: any) => [e.id, e])).values()];
    if (this.items.length) {
      this.cartCount = this.items.length;
      this.items.forEach((e: any) => {
        this.totalPrice += Number(e.price);
      });
      this.totalPrice = Number(this.totalPrice.toFixed(2));
    } else {
      this.cartCount = 0;
      this.totalPrice = 0;
    }
  }
}
