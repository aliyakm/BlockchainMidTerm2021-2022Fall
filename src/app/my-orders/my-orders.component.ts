import { Component, OnInit } from '@angular/core';

import { orders } from '../orders';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders =  orders;

  constructor() { }

  ngOnInit() {
  }

}

