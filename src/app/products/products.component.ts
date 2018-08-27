import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Products} from "../content/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsContents;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -64);
      }
    });
    this.productsContents = [];
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(d=> this.productContents(d.product));
  }
  productContents(product:string) {
    switch (product) {
      default:
        this.productsContents = [
          Products
        ];
    }
}
