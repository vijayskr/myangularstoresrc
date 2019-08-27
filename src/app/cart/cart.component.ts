import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService: CartService,
  private formBuilder: FormBuilder) {
    this.items = cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    
    console.warn('Order has been placed');

    this.items = this.cartService.claerCart();
    this.checkoutForm.reset();
  }
}